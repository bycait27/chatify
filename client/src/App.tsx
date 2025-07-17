import './App.css'
import Sidebar from './components/chat/Sidebar'
import ChatWindow from './components/chat/ChatWindow'

function App() {
  return (
    <div className="flex h-screen bg-chat-background">
      <Sidebar />
      <ChatWindow />
    </div>
  )
}

export default App