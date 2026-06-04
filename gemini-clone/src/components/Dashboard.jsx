import Images from '../assets/assets.js'
import { useState, useRef } from 'react'

const Dashboard = () => {
    const [prompt, setprompt] = useState("")
    const textareaRef = useRef(null)
    const handleChange = (e) => {
        setprompt(e.target.value)
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
        }
    }

    return (
        <div className="h-screen flex-1 flex flex-col bg-sky-100">
            <div className="flex justify-end p-4">
                <span className="bg-sky-300 rounded-2xl py-2 px-3">Upgrade</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-10">
                <h1 className="text-4xl">What's next, Vivek?</h1>
                <div className='flex items-center w-full max-w-3xl gap-3 px-4 py-3 rounded-3xl bg-white shadow-sm'>
                    <img src={Images.plusIcon} alt="" className='h-5 w-5' />
                    <textarea ref={textareaRef} value={prompt} onChange={handleChange} placeholder='Ask Gemini' rows={1} className='flex-1 resize-none overflow-y-auto bg-transparent p-2 focus:outline-none max-h-40 leading-6' />
                    <img src={Images.microphone} alt="" className='h-5 w-5' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard