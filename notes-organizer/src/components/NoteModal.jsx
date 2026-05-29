import { useState, useEffect } from 'react'

export default function NoteModal({ onClose, onSave, selectedNote }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title)
            setContent(selectedNote.content)
        }
    }, [selectedNote])

    const handleSave = () => {
        if (!title || !content) return
        onSave({
            id: selectedNote?.id || Date.now(),
            title,
            content,
        })
        setTitle('')
        setContent('')
    }

    return (
        <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
            <div className='bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-[90%] max-w-2xl'>
                <h2 className='text-3xl font-bold mb-6'>
                    {selectedNote
                        ? 'Edit Note'
                        : 'New Note'}
                </h2>

                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='w-full bg-zinc-800 rounded-xl p-4 mb-4 outline-none'
                />

                <textarea
                    placeholder='Write your note...'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows='8'
                    className='w-full bg-zinc-800 rounded-xl p-4 mb-6 outline-none resize-none'
                />

                <div className='flex gap-4 justify-end'>
                    <button
                        onClick={onClose}
                        className='bg-zinc-700 px-5 py-3 rounded-xl'
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className='bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 rounded-xl'
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}