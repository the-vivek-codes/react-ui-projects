import { Archive, ArchiveRestore, Star, StarOff, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NoteCard({ note, onClick, onDelete, onFavorite, onArchive }) {
    const lastEdited = new Date(note.updatedAt).toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    })
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            onClick={onClick}
            className='bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg cursor-pointer'
        >
            <h2 className='text-xl font-semibold mb-3 line-clamp-1'>{note.title}</h2>
            <p className='text-zinc-400 line-clamp-2'>
                {note.content}
            </p>
            <p className="text-xs text-zinc-500 mt-4"> Last edited {lastEdited} </p>
            <hr className="border-gray-700 my-6" />

            <div className='flex flex-wrap gap-3 mt-6'>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onFavorite()
                    }}
                    className='flex items-center gap-4 bg-zinc-800 text-zinc-200 px-4 py-2 rounded-lg hover:bg-zinc-700 transition'
                >
                    {note.favorite ? (
                        <>
                            <StarOff size={16} />
                            <span>Unfavorite</span>
                        </>
                    ) : (
                        <>
                            <Star size={16} />
                            <span>Favorite</span>
                        </>
                    )}
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onArchive()
                    }}
                    className='flex items-center gap-4 bg-zinc-800 text-zinc-200 px-4 py-2 rounded-lg hover:bg-zinc-700 transition'
                >
                    {note.archived ? (
                        <>
                            <ArchiveRestore size={16} />
                            <span>Unarchive</span>
                        </>
                    ) : (
                        <>
                            <Archive size={16} />
                            <span>Archive</span>
                        </>
                    )}
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onDelete()
                    }}
                    className='flex items-center gap-4 bg-zinc-800 text-zinc-200 px-4 py-2 rounded-lg hover:bg-zinc-700 transition'
                >
                    <Trash2 size={16} />
                    <span>Delete</span>
                </button>
            </div>
        </motion.div>
    )
}