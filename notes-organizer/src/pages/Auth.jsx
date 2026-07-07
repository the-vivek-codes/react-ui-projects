import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getUsers, saveUsers, setCurrentUser } from '../utils/storage'

export default function Auth() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.trim() || !password.trim() || (!isLogin && !name.trim())) {
            alert("Please fill all fields!")
            return
        }
        const users = getUsers()

        if (isLogin) {
            const user = users.find(u => u.email === email && u.password === password)
            if (!user) {
                alert('Invalid credentials!')
                return
            }
            setCurrentUser(user)
            navigate('/dashboard')
        }
        else {
            const exists = users.find(u => u.email === email)
            if (exists) {
                alert('User already exists!')
                return
            }
            const newUser = {
                name,
                email,
                password,
            }
            saveUsers([...users, newUser])
            setCurrentUser(newUser)
            navigate('/dashboard')
        }
    }

    const toggleMode = () => {
        setIsLogin(prev => !prev)
        setName("")
        setEmail("")
        setPassword("")
    }
    return (
        <div className='min-h-screen bg-linear-to-br from-zinc-500 via-zinc-200 to-zinc-50 flex items-center justify-center px-6'>
            <div className='grid lg:grid-cols-2 w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl'>
                <div className="hidden lg:flex flex-col justify-center p-16 border-r border-gray-200">
                    <h1 className='text-6xl font-bold leading-tight text-gray-900'>
                        Organize Your
                        <span className='text-gray-500'> Thoughts</span>
                    </h1>

                    <p className='text-gray-600 mt-6 text-lg'>
                        A premium minimalist notes organizer built using React and TailwindCSS
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className='p-10 lg:p-16 flex flex-col justify-center'
                >
                    <h2 className='text-4xl font-bold mb-2 text-gray-900'>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className='text-gray-500 mb-10'>
                        {isLogin
                            ? 'Sign in to continue'
                            : 'Register to start organizing'}
                    </p>
                    
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="bg-gray-100 border border-gray-300 rounded-xl p-4 mb-4 text-gray-900 placeholder-gray-500 outline-none transition focus:border-black"
                        />
                    )}
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-gray-100 border border-gray-300 rounded-xl p-4 mb-4 text-gray-900 placeholder-gray-500 outline-none transition focus:border-black"
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="bg-gray-100 border border-gray-300 rounded-xl p-4 mb-4 text-gray-900 placeholder-gray-500 outline-none transition focus:border-black"
                    />

                    <button
                        type='submit'
                        className="bg-black hover:bg-gray-800 text-white rounded-xl p-4 font-semibold cursor-pointer active:scale-95 transition duration-150"
                    >
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>

                    <p className='text-gray-600 mt-6'>
                        {isLogin ? 'New here?' : 'Already have an account?'}
                        <button
                            type="button"
                            onClick={toggleMode}
                            className="ml-2 text-gray-600 font-semibold cursor-pointer hover:text-black active:scale-95 transition duration-150 inline-block"
                        >
                            {isLogin ? 'REGISTER' : 'SIGN IN'}
                        </button>
                    </p>
                </motion.form>
            </div>
        </div>
    )
}
