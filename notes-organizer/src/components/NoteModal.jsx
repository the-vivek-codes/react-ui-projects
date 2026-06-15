import {useState, useEffect} from 'react'

export default function NoteModal({ note, onSave, onClose }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        if (note) {
            setTitle(note.title)
            setContent(note.content)
        }
    }, [note])

    const handleSave = () => {
        onSave({
            id: note?.id || Date.now(),
            title,
            content,
        })
    }

    return (
        <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
            <div className='bg-zinc-900 border border-white/10 rounded-3xl p-8 w-[90%] max-w-2xl'>
                <h2 className='text-3xl font-bold mb-6'>
                    {note ? 'Edit Note' : 'Create Note'}
                </h2>

                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='w-full bg-zinc-800 p-4 rounded-xl mb-4 outline-none'
                />

                <textarea
                    placeholder='Write something beautiful...'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className='w-full bg-zinc-800 p-4 rounded-xl h-60 outline-none resize-none'
                />

                <div className='flex justify-end gap-4 mt-6'>
                    <button
                        onClick={onClose}
                        className='px-5 py-3 rounded-xl bg-zinc-700'
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className='px-5 py-3 rounded-xl bg-blue-500'
                    >
                        Save Note
                    </button>
                </div>
            </div>
        </div>
    )
}