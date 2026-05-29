import { motion } from 'framer-motion'

export default function NoteCard({ note, onDelete, onEdit}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between'
        >
            <div>
                <h2 className='text-2xl font-bold mb-3'>{note.title}</h2>
                <p className='text-zinc-400 whitespace-pre-wrap'>{note.content}</p>
            </div>
            <div className='flex gap-3 mt-6'>
                <button
                    onClick={onEdit}
                    className='bg-purple-500/20 text-purple-300 px-4 py-2 rounded-xl hover:bg-purple-500/30 transition'
                >
                    Edit
                </button>
                <button
                    onClick={onDelete}
                    className='bg-red-500/20 text-red-300 px-4 py-2 rounded-xl hover:bg-red-500/30 transition'
                >
                    Delete
                </button>
            </div>
        </motion.div>
    )
}