function Sidebar() {
    const users = [
        { id: 1, name: "Alice Johnson", lastMessage: "Hey there!", time: "2m ago", online: true },
        { id: 2, name: "Bob Smith", lastMessage: "See you tomorrow", time: "5m ago", online: false },
        { id: 3, name: "Charlie Brown", lastMessage: "Thanks for the help", time: "1h ago", online: true },
        { id: 4, name: "Diana Prince", lastMessage: "Let's meet up soon", time: "2h ago", online: false },
        { id: 5, name: "Eve Wilson", lastMessage: "Great job on the project", time: "3h ago", online: true },
        { id: 6, name: "Frank Miller", lastMessage: "I'll get back to you", time: "1d ago", online: false },
    ]

    return (
        <div className="w-80 bg-chat-sidebar border-r border-border flex flex-col">
            {/* header */}
            <div className="p-4 bg-chat-header border-b border-border">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold text-foreground">Messages</h2>
                        <button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-primary-foreground">
                            +
                        </button>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search conversations..." 
                        className="w-full px-3 py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                </div>
                
                {/* list of conversations */}
                <div className="overflow-y-auto h-full">
                    {users.map((user) => (
                        <div key={user.id} 
                             className="flex items-center p-4 cursor-pointer border-b last:border-b-0 transition-colors hover:bg-hover-bg border-border">
                            
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 text-sm font-semibold bg-muted text-muted-foreground">
                                {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            
                            {/* conversation info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium text-sm truncate text-foreground">
                                        {user.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        {user.online && (
                                            <div className="w-2 h-2 rounded-full bg-online"></div>
                                        )}
                                        <span className="text-xs text-timestamp">
                                            {user.time}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm truncate text-muted-foreground">
                                    {user.lastMessage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Sidebar