import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('currentUser'))
  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-black text-white flex'>
      <Sidebar onLogout={handleLogout} />
      <div className='flex-1 p-8'>
        <div className='flex justify-between items-center mb-10'>
          <div>
            <h1 className='text-4xl font-bold'>Welcome Back</h1>
            <p className='text-zinc-400 mt-2'>{user?.email}</p>
          </div>
          <button className='bg-linear-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-[1.03] transition'>+ New Note</button>
        </div>
        <div className='h-[70vh] border border-dashed border-zinc-700 rounded-3xl flex items-center justify-center text-zinc-500 text-xl'>No notes yet.</div>
      </div>
    </div>
  )
}