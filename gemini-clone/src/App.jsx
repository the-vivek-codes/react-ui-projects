import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'

const App = () => {
    const [messages, setMessages] = useState([])
    const [recentChats, setRecentChats] = useState([])
    const handleNewChat = () => {
        if (messages.length > 0) {
            const chatTitle = messages[0].text
            const chat = {
                title: chatTitle,
                messages: messages
            }
            setRecentChats(prev => [chat, ...prev])
        }
        setMessages([])
    }
    const loadChat = (chat) => {
        setMessages(chat.messages)
    }

    return <div className='flex'>
        <Sidebar recentChats={recentChats} onNewChat={handleNewChat} loadChat={loadChat} />
        <Dashboard messages={messages} setMessages={setMessages} />
    </div>
}
export default App