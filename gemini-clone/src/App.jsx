import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'

const App = () => {
    const [messages, setMessages] = useState([])
    const [recentChats, setRecentChats] = useState([])
    const [activeChatIndex, setActiveChatIndex] = useState(null)
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
        setActiveChatIndex(null)
    }
    const loadChat = (chat,index) => {
        setMessages(chat.messages)
        setActiveChatIndex(index)
    }

    return <div className='flex'>
        <Sidebar recentChats={recentChats} onNewChat={handleNewChat} loadChat={loadChat} activeChatIndex={activeChatIndex} />
        <Dashboard messages={messages} setMessages={setMessages} />
    </div>
}
export default App