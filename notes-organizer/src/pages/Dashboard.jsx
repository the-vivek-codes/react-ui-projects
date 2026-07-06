import { Search, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import NoteCard from '../components/NoteCard'
import NoteModal from '../components/NoteModal'
import { logout, getCurrentUser } from '../utils/storage'

export default function Dashboard() {
    const navigate = useNavigate()
    const currentUser = getCurrentUser()
    const storageKey = `notes_${currentUser.email}`

    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all')
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedNote, setSelectedNote] = useState(null)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(storageKey)) || []
        setNotes(saved)
    }, [])
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(notes))
    }, [notes])

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const handleSaveNote = (note) => {
        setNotes(prevNotes => {
            const exists = prevNotes.some(n => n.id === note.id)
            if (exists) {
                return prevNotes.map(n => n.id === note.id ? { ...n, ...note } : n)
            }
            return [{ favorite: false, archived: false, ...note }, ...prevNotes]
        })
        setModalOpen(false)
        setSelectedNote(null)
    }

    const handleDelete = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id) )
    }

    const toggleFavorite = (id) => {
        setNotes(prevNotes =>
            prevNotes.map(note => note.id === id ? { ...note, favorite: !note.favorite } : note )
        )
    }
    const toggleArchive = (id) => {
        setNotes(prevNotes =>
            prevNotes.map(note => note.id === id ? { ...note, archived: !note.archived } : note )
        )
    }
    const filteredNotes = notes.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase())
        if (filter === 'favorites') {
            return (matchesSearch && note.favorite && !note.archived)
        }
        if (filter === 'archived') { return matchesSearch && note.archived }
        return matchesSearch && !note.archived
    })

    return (
        <div className='min-h-screen bg-[#0F1115] text-white flex'>
            <Sidebar onLogout={handleLogout} setFilter={setFilter} filter={filter} />

            <div className='flex-1 p-6 lg:p-10'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10'>
                    <div>
                        <h1 className='text-4xl font-bold'>Your Notes</h1>
                        <p className='text-zinc-400 mt-2'> Welcome, {currentUser.name} </p>
                    </div>

                    <div className='flex gap-4'>
                        <div className="relative">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search notes..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="bg-zinc-900 border border-zinc-700 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            onClick={() => setModalOpen(true)}
                            className='bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition-colors flex items-center gap-3'
                        >
                            <Plus size={20} />
                            <span>Add Note</span>
                        </button>
                    </div>
                </div>
                {filteredNotes.length === 0 ? (
                    <div className='h-[60vh] flex items-center justify-center text-zinc-500 text-xl'>
                        {filter === 'favorites' ? 'No favorite notes.' : filter === 'archived' ? 'No archived notes.' : 'No notes found.'}
                    </div>
                ) : (
                    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                        {filteredNotes.map(note => (
                            <NoteCard
                                key={note.id}
                                note={note}
                                onDelete={() => handleDelete(note.id)}
                                onEdit={() => {
                                    setSelectedNote(note)
                                    setModalOpen(true)
                                }}
                                onFavorite={() => toggleFavorite(note.id)}
                                onArchive={() => toggleArchive(note.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
            {modalOpen && (
                <NoteModal
                    note={selectedNote}
                    onSave={handleSaveNote}
                    onClose={() => {
                        setModalOpen(false)
                        setSelectedNote(null)
                    }}
                />
            )}
        </div>
    )
}