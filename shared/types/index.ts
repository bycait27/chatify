// shared types between client and server

export interface Message {
    id: string 
    userId: string 
    username: string 
    content: string 
    timestamp: Date 
    type: 'text' | 'join' | 'leave'
}

export interface User {
    id: string 
    username: string 
    isOnline: boolean 
    lastSeen?: Date 
}

export interface ChatRoom {
    id: string 
    name: string 
    users: User[]
    messages: Message[]
}

// socket event types

export interface ServerToClientEvents {
    message: (message: Message) => void 
    userJoined: (user: User) => void 
    userLeft: (userId: string) => void
    userList: (users: User[]) => void 
    typing: (userId: string, isTyping: boolean) => void
}

export interface ClientToServerEvents {
    message: (content: string) => void
    join: (username: string) => void 
    typing: (isTyping: boolean) => void 
}