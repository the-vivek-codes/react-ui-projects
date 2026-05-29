import {motion} from 'framer-motion'

export default function NoteCard({ note, onDelete, onEdit, onFavorite, onArchive }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className='bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg'
        >
            <h2 className='text-xl font-semibold mb-3'>{note.title}</h2>
            <p className='text-zinc-400 line-clamp-4'>
                {note.content}
            </p>

            <div className='flex flex-wrap gap-3 mt-6'>
                <button
                    onClick={onEdit}
                    className='bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition'
                >
                    Edit
                </button>
                <button
                    onClick={onFavorite}
                    className='bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-lg hover:bg-yellow-500/30 transition'
                >
                    {note.favorite ? 'Unfavorite' : 'Favorite'}
                </button>
                <button
                    onClick={onArchive}
                    className='bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition'
                >
                    {note.archived ? 'Unarchive' : 'Archive'}
                </button>
                <button
                    onClick={onDelete}
                    className='bg-red-500/20 text-red-300 px-4 py-2 rounded-lg hover:bg-red-500/30 transition'
                >
                    Delete
                </button>
            </div>
        </motion.div>
    )
}