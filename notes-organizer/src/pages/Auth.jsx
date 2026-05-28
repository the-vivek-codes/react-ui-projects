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
        <div className='min-h-screen bg-black flex items-center justify-center overflow-hidden relative'>
            <div className='absolute w-96 h-96 bg-purple-500/30 blur-3xl rounded-full top-10 left-10'></div>
            <div className='absolute w-96 h-96 bg-blue-500/30 blur-3xl rounded-full bottom-10 right-10'></div>

            <div className='grid lg:grid-cols-2 w-[90%] max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl'>
                <div className='hidden lg:flex flex-col justify-center p-16'>
                    <h1 className='text-6xl font-bold leading-tight'>
                        Organize Your
                        <span className='text-purple-400'> Thoughts</span>
                    </h1>

                    <p className='text-zinc-400 mt-6 text-lg'>
                        A premium minimalist notes organizer built with React.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-10 lg:p-16 flex flex-col justify-center'
                >
                    <h2 className='text-4xl font-bold mb-2'>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className='text-zinc-400 mb-10'>
                        {isLogin
                            ? 'Sign in to continue'
                            : 'Register to start organizing'}
                    </p>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='bg-zinc-900 border border-zinc-700 rounded-xl p-4 mb-4 outline-none focus:border-purple-500 transition'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='bg-zinc-900 border border-zinc-700 rounded-xl p-4 mb-6 outline-none focus:border-purple-500 transition'
                    />
                    <button
                        onClick={handleSubmit}
                        className='bg-linear-to-r from-purple-500 to-blue-500 p-4 rounded-xl font-semibold hover:scale-[1.02] transition'
                    >
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>
                    <p className='text-zinc-400 mt-6'>
                        {isLogin ? 'New here?' : 'Already have an account?'}
                        <button onClick={() => setIsLogin(!isLogin)} className='ml-2 text-purple-400'>
                            {isLogin ? 'Register' : 'Sign In'}
                        </button>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
