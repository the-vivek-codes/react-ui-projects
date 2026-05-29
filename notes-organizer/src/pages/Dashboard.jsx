import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

import NoteCard from '../components/NoteCard'

import NoteModal from '../components/NoteModal'

import {
  getNotes,
  saveNotes,
} from '../utils/storage'

export default function Dashboard() {

  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem('currentUser')
  )

  const [notes, setNotes] = useState([])

  const [modalOpen, setModalOpen] =
    useState(false)

  const [selectedNote, setSelectedNote] =
    useState(null)

  useEffect(() => {
    setNotes(getNotes())
  }, [])

  useEffect(() => {
    saveNotes(notes)
  }, [notes])

  const handleLogout = () => {

    localStorage.removeItem('currentUser')

    navigate('/')
  }

  const handleSaveNote = (note) => {

    const exists = notes.find(
      n => n.id === note.id
    )

    if (exists) {

      setNotes(
        notes.map(n =>
          n.id === note.id ? note : n
        )
      )

    } else {

      setNotes([note, ...notes])
    }

    setModalOpen(false)

    setSelectedNote(null)
  }

  const handleDelete = (id) => {

    setNotes(
      notes.filter(note => note.id !== id)
    )
  }

  return (
    <div className='min-h-screen bg-black text-white flex'>

      <Sidebar onLogout={handleLogout} />

      <div className='flex-1 p-8'>

        <div className='flex justify-between items-center mb-10'>

          <div>

            <h1 className='text-4xl font-bold'>
              Welcome Back
            </h1>

            <p className='text-zinc-400 mt-2'>
              {user?.email}
            </p>

          </div>

          <button
            onClick={() => {
              setSelectedNote(null)
              setModalOpen(true)
            }}
            className='bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-[1.03] transition'
          >
            + New Note
          </button>

        </div>

        {notes.length === 0 ? (

          <div className='h-[70vh] border border-dashed border-zinc-700 rounded-3xl flex items-center justify-center text-zinc-500 text-xl'>

            No notes yet.

          </div>

        ) : (

          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>

            {notes.map(note => (

              <NoteCard
                key={note.id}
                note={note}
                onDelete={() =>
                  handleDelete(note.id)
                }
                onEdit={() => {
                  setSelectedNote(note)
                  setModalOpen(true)
                }}
              />

            ))}

          </div>

        )}

      </div>

      {modalOpen && (

        <NoteModal
          onClose={() => {
            setModalOpen(false)
            setSelectedNote(null)
          }}
          onSave={handleSaveNote}
          selectedNote={selectedNote}
        />

      )}

    </div>
  )
}