import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {getUsers, saveUsers, setCurrentUser} from '../utils/storage'

export default function Auth() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        const users = getUsers()

        if (isLogin) {
            const user = users.find(u => u.email === email && u.password === password)
            if (!user) {
                alert('Invalid credentials')
                return
            }
            setCurrentUser(user)
            navigate('/dashboard')
        }
        else {
            const exists = users.find(u => u.email === email)
            if (exists) {
                alert('User already exists')
                return
            }
            const newUser = {
                email,
                password,
            }
            saveUsers([...users, newUser])
            setCurrentUser(newUser)
            navigate('/dashboard')
        }
    }
    return (
        <div className='min-h-screen bg-linear-to-br from-cyan-950 via-slate-950 to-black flex items-center justify-center px-6'>
            <div className='grid lg:grid-cols-2 w-full max-w-5xl bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl'>
                <div className='hidden lg:flex flex-col justify-center p-16 border-r border-slate-800'>
                    <h1 className='text-6xl font-bold leading-tight text-white'>
                        Organize Your
                        <span className='text-cyan-400'> Thoughts</span>
                    </h1>

                    <p className='text-slate-400 mt-6 text-lg'>
                        A premium minimalist notes organizer built using React and TailwindCSS
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-10 lg:p-16 flex flex-col justify-center'
                >
                    <h2 className='text-4xl font-bold mb-2 text-white'>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                     <p className='text-slate-400 mb-10'>
                        {isLogin
                            ? 'Sign in to continue'
                            : 'Register to start organizing'}
                    </p>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='bg-slate-950 border border-slate-700 text-white rounded-xl p-4 mb-4 outline-none focus:border-cyan-500 transition'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='bg-slate-950 border border-slate-700 text-white rounded-xl p-4 mb-6 outline-none focus:border-cyan-500 transition'
                    />
                    <button
                        onClick={handleSubmit}
                        className='bg-cyan-600 hover:bg-cyan-500 p-4 rounded-xl font-semibold transition'
                    >
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>
                    <p className='text-slate-400 mt-6'>
                        {isLogin ? 'New here?' : 'Already have an account?'}
                        <button onClick={() => setIsLogin(!isLogin)} className='ml-2 text-cyan-400'>
                            {isLogin ? 'Register' : 'Sign In'}
                        </button>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
