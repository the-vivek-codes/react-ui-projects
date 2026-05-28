import { motion } from 'framer-motion'

export default function Auth() {
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
            Welcome Back
          </h2>

          <p className='text-zinc-400 mb-10'>
            Sign in to continue
          </p>

          <input
            type='email'
            placeholder='Email'
            className='bg-zinc-900 border border-zinc-700 rounded-xl p-4 mb-4 outline-none focus:border-purple-500 transition'
          />

          <input
            type='password'
            placeholder='Password'
            className='bg-zinc-900 border border-zinc-700 rounded-xl p-4 mb-6 outline-none focus:border-purple-500 transition'
          />

          <button className='bg-linear-to-r from-purple-500 to-blue-500 p-4 rounded-xl font-semibold hover:scale-[1.02] transition'>
            Sign In
          </button>

          <p className='text-zinc-400 mt-6'>
            New here?
            <span className='text-purple-400 ml-2 cursor-pointer'>
              Register
            </span>
          </p>

        </motion.div>
      </div>
    </div>
  )
}