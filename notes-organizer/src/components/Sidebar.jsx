import {NotepadText, Star, Archive, LogOut} from 'lucide-react'

export default function Sidebar({ onLogout, setFilter, filter }) {
    return (
        <div className='w-72 bg-[#141821] border-r border-white/10 p-6 hidden md:flex flex-col justify-between'>
            <div>
                <h1 className='text-3xl font-bold mb-4'>Notes</h1>
                <hr className="border-gray-700 mb-6" />

                <div className='space-y-4'>
                    <button
                        onClick={() => setFilter('all')}
                        className={`w-full p-4 rounded-xl flex items-center gap-5 transition-all duration-300 ${filter === 'all'
                                ? 'bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'hover:bg-zinc-800 text-zinc-300'
                            }`}
                    >
                        <NotepadText size={20} />
                        <span>All Notes</span>
                    </button>

                    <button
                        onClick={() => setFilter('favorites')}
                        className={`w-full p-4 rounded-xl flex items-center gap-5 transition-all duration-300 ${filter === 'favorites'
                                ? 'bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'hover:bg-zinc-800 text-zinc-300'
                            }`}
                    >
                        <Star size={20} />
                        <span>Favorites</span>
                    </button>

                    <button
                        onClick={() => setFilter('archived')}
                        className={`w-full p-4 rounded-xl flex items-center gap-5 transition-all duration-300 ${filter === 'archived'
                                ? 'bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20'
                                : 'hover:bg-zinc-800 text-zinc-300'
                            }`}
                    >
                        <Archive size={20} />
                        <span>Archived</span>
                    </button>
                </div>
            </div>

            <button
                onClick={onLogout}
                className='bg-red-500/20 text-red-400 p-4 rounded-xl hover:bg-red-500/30 transition flex items-center gap-5'
            >
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </div>
    )
}