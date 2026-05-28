export default function Auth() {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='bg-zinc-900 p-10 rounded-3xl w-[90%] max-w-md'>
        <h1 className='text-4xl font-bold mb-6'>Notes Organizer</h1>

        <input type='email' placeholder='Email' className='w-full bg-zinc-800 p-4 rounded-xl mb-4 outline-none' />
        <input type='password' placeholder='Password' className='w-full bg-zinc-800 p-4 rounded-xl mb-6 outline-none' />
        <button className='w-full bg-white text-black p-4 rounded-xl font-semibold'>Sign In</button>
      </div>
    </div>
  )
}