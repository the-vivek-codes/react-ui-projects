import Images from '../assets/assets.js'

const Dashboard = () => {
    return (
        <div className="h-screen flex-1 flex flex-col bg-sky-100">
            <div className="flex justify-end p-4">
                <span className="bg-sky-300 rounded-2xl py-2 px-3">Upgrade</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-10">
                <h1 className="text-4xl">What's next, Vivek?</h1>
                <div className='flex items-center w-full max-w-3xl gap-3 px-4 py-2 rounded-4xl bg-white'>
                    <img src={Images.plusIcon} alt="" className='h-5 w-5' />
                    <input type='text' placeholder='Ask Gemini' className='p-2 flex-1 focus:outline-none' />
                    <img src={Images.microphone} alt="" className='h-5 w-5' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard