import { PenLine, Archive, ArchiveRestore, Star, StarOff, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

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
            <hr className="border-gray-700 my-6" />

            <div className='flex flex-wrap gap-3 mt-6'>
                <button
                    onClick={onEdit}
                    className='flex items-center gap-4 bg-zinc-800 text-zinc-200 px-4 py-2 rounded-lg hover:bg-zinc-700 transition'
                >
                    <PenLine size={16} />
                    <span>Edit</span>
                </button>
                <button
                    onClick={onFavorite}
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
                    onClick={onArchive}
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
                    onClick={onDelete}
                    className='flex items-center gap-4 bg-zinc-800 text-zinc-200 px-4 py-2 rounded-lg hover:bg-zinc-700 transition'
                >
                    <Trash2 size={16} />
                    <span>Delete</span>
                </button>
            </div>
        </motion.div>
    )
}