import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import NoteCard from '../components/NoteCard'
import NoteModal from '../components/NoteModal'
import { logout, getCurrentUser } from '../utils/storage'

export default function Dashboard() {
    const navigate = useNavigate()
    const currentUser = getCurrentUser()

    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all')
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedNote, setSelectedNote] = useState(null)

    const storageKey = `notes_${currentUser.email}`

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
        const newNote = {
            favorite: false,
            archived: false,
            ...note,
        }
        const exists = notes.find(n => n.id === note.id)

        if (exists) {
            setNotes(notes.map(n => n.id === note.id ? note : n))
        } else {
            setNotes([note, ...notes])
        }
        setModalOpen(false)
        setSelectedNote(null)
    }

    const handleDelete = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    const toggleFavorite = (id) => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === id
                    ? { ...note, favorite: !note.favorite }
                    : note
            )
        )
    }
    const toggleArchive = (id) => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === id
                    ? { ...note, archived: !note.archived }
                    : note
            )
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
        <div className='min-h-screen bg-black text-white flex'>
            <Sidebar onLogout={handleLogout} setFilter={setFilter} filter={filter} />

            <div className='flex-1 p-6 lg:p-10'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10'>
                    <div>
                        <h1 className='text-4xl font-bold'>Your Notes</h1>
                        <p className='text-zinc-400 mt-2'>
                            Welcome back, {currentUser.email}
                        </p>
                    </div>

                    <div className='flex gap-4'>
                        <input
                            type='text'
                            placeholder='Search notes...'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className='bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none'
                        />
                        <button
                            onClick={() => setModalOpen(true)}
                            className='bg-linear-to-r from-purple-500 to-blue-500 px-6 rounded-xl font-semibold hover:scale-[1.02] transition'
                        >
                            + Add Note
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