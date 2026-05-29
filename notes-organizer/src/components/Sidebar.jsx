export default function Sidebar({ onLogout }) {
    return (
        <div className='w-72 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col justify-between'>
            <div>
                <h1 className='text-3xl font-bold mb-10'>Notes</h1>
                <div className='space-y-4'>
                    <button className='w-full text-left p-4 rounded-xl bg-zinc-800 transition'>All Notes</button>
                    <button className='w-full text-left p-4 rounded-xl hover:bg-zinc-800 transition'>Favorites</button>
                    <button className='w-full text-left p-4 rounded-xl hover:bg-zinc-800 transition'>Archived</button>
                </div>
            </div>
            <button onClick={onLogout} className='bg-red-500/20 text-red-300 p-4 rounded-xl hover:bg-red-500/30 transition'>Logout</button>
        </div>
    )
}