export default function Sidebar({ onLogout, setFilter, filter }) {
    return (
        <div className='w-72 bg-white/5 border-r border-white/10 p-6 hidden md:flex flex-col justify-between'>
            <div>
                <h1 className='text-3xl font-bold mb-10'>Notes</h1>

                <div className='space-y-4'>
                    <button
                        onClick={() => setFilter('all')}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${filter === 'all'
                                ? 'bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                                : 'hover:bg-zinc-800 text-zinc-300'
                            }`}
                    >
                        All Notes
                    </button>

                    <button
                        onClick={() => setFilter('favorites')}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${filter === 'favorites'
                                ? 'bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                                : 'hover:bg-zinc-800 text-zinc-300'
                            }`}
                    >
                        Favorites
                    </button>

                    <button
                        onClick={() => setFilter('archived')}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${filter === 'archived'
                                ? 'bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                                : 'hover:bg-zinc-800 text-zinc-300'
                            }`}
                    >
                        Archived
                    </button>
                </div>
            </div>

            <button
                onClick={onLogout}
                className='bg-red-500/20 text-red-400 p-4 rounded-xl hover:bg-red-500/30 transition'
            >
                Logout
            </button>
        </div>
    )
}