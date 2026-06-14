import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'

const App = () => {
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("messages")
        return savedMessages ? JSON.parse(savedMessages) : []
    })
    const [recentChats, setRecentChats] = useState(() => {
        const savedChats = localStorage.getItem("recentChats")
        return savedChats ? JSON.parse(savedChats) : []
    })
    const [activeChatIndex, setActiveChatIndex] = useState(null)
    useEffect(() => {
        localStorage.setItem("recentChats", JSON.stringify(recentChats))
    })
    useEffect(() => { localStorage.setItem("messages", JSON.stringify(messages)) }, [messages])
    const handleNewChat = () => {
        if (activeChatIndex === null && messages.length > 0) {
            const chat = {
                title: messages[0].text,
                messages: messages
            }
            setRecentChats(prev => [chat, ...prev])
        }
        setMessages([])
        setActiveChatIndex(null)
    }
    const loadChat = (chat, index) => {
        setMessages(chat.messages)
        setActiveChatIndex(index)
    }

    return <div className='flex'>
        <Sidebar recentChats={recentChats} onNewChat={handleNewChat} loadChat={loadChat} activeChatIndex={activeChatIndex} />
        <Dashboard messages={messages} setMessages={setMessages} activeChatIndex={activeChatIndex} recentChats={recentChats} setRecentChats={setRecentChats} />
    </div>
}
export default App