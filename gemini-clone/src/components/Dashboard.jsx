import Images from '../assets/assets.js'
import { useState, useRef } from 'react'

const Dashboard = ({ messages, setMessages, activeChatIndex, recentChats, setRecentChats }) => {
    const [prompt, setprompt] = useState("")
    const textareaRef = useRef(null)
    const handleChange = (e) => {
        setprompt(e.target.value)
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
        }
    }

    const sendMessage = () => {
        if (!prompt.trim()) return
        const newMessage = {
            role: "user",
            text: prompt
        }
        const updatedMessages = [...messages, newMessage]
        setMessages(updatedMessages)
        if (activeChatIndex !== null) {
            const updatedChats = [...recentChats]
            updatedChats[activeChatIndex] = {
                ...updatedChats[activeChatIndex],
                messages: updatedMessages
            }
            setRecentChats(updatedChats)
        }
        setprompt("")
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.focus()
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className="h-screen flex-1 flex flex-col bg-sky-100">
            <div className="flex justify-end p-4">
                <span className="bg-sky-300 rounded-2xl py-2 px-3 flex items-center gap-2">
                    <img src={Images.geminiblueIcon} alt="" className='h-6 w-6' />
                    <span>Upgrade</span>
                </span>
            </div>
            {messages.length === 0 && (
                <div className="flex-1 flex flex-col justify-center items-center gap-10">
                    <h1 className="text-4xl">
                        What can I help with, Vivek?
                    </h1>
                </div>
            )}
            {messages.length > 0 && (
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {messages.map((msg, index) => (
                        <div key={index} className="flex justify-end mb-4" >
                            <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xl">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex justify-center p-4">
                <div className='flex items-center w-full max-w-3xl gap-4 px-4 py-3 rounded-3xl bg-white shadow-sm'>
                    <img src={Images.plusIcon} alt="" className='h-5 w-5' />
                    <textarea ref={textareaRef} value={prompt} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Ask Gemini' rows={1} className='flex-1 resize-none overflow-y-auto bg-transparent p-2 focus:outline-none max-h-40 leading-6' />
                    <img src={Images.microphone} alt="" className='h-5 w-5' />
                    {prompt.trim().length > 0 && (<img src={Images.sendIcon} alt="send" onClick={sendMessage} className="h-5 w-5 cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200" />)}
                </div>
            </div>
        </div>
    )
}

export default Dashboard