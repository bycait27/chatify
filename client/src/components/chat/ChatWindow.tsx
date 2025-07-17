function ChatWindow() {
    const messages = [
        { id: 1, text: "Hey! How's it going?", sender: "other", timestamp: "2:30 PM" },
        { id: 2, text: "Pretty good! Just working on some code", sender: "me", timestamp: "2:31 PM" },
        { id: 3, text: "Nice! What are you building?", sender: "other", timestamp: "2:32 PM" },
        { id: 4, text: "A chat app actually! Want to see it when it's done?", sender: "me", timestamp: "2:33 PM" },
        { id: 5, text: "Absolutely! That sounds really cool", sender: "other", timestamp: "2:34 PM" },
        { id: 6, text: "I'll send you the link when it's ready 👍", sender: "me", timestamp: "2:35 PM" },
    ];

    return (
        <div className="flex-1 flex flex-col">
            {/* header */}
            <div className="p-4 bg-chat-header border-b border-border flex flex-col">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground"><span className="text-muted-foreground">To:</span> Caitlin Ash</h2>
                    <button className="m-2 inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-sm font-semibold transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-secondary text-foreground">i</button>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-2 h-2 rounded-full bg-online m-2"></div>
                    <h2 className="text-green-500">Online</h2>
                </div>
            </div>
            
            {/* messages */}
            <div className="flex-1 flex flex-col p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className="max-w-xs lg:max-w-md">
                            <div
                                className={`px-4 py-2 rounded-lg ${
                                    message.sender === 'me'
                                        ? 'bg-message-user-bg text-message-user-text rounded-br-sm'
                                        : 'bg-message-other-bg text-message-other-text rounded-bl-sm'
                                }`}
                            >
                                <p className="text-sm">{message.text}</p>
                            </div>
                            <p className={`text-xs mt-1 ${
                                message.sender === 'me' ? 'text-right' : 'text-left'
                            } text-timestamp`}>
                                {message.timestamp}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* message input */}
            <div className="p-4 bg-chat-input border-t border-border">
                <div className="flex gap-2">
                    <input 
                        type="text"
                        placeholder="Type a message..." 
                        className="flex-1 px-3 py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <button className="px-4 py-2 rounded-md font-medium transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-primary-foreground">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow