export const fetchMessages = (chatId) => (
    $.ajax({
        url: `api/chats/${chatId}`,
        method: 'get'
    })
)

export const createChat = (title) => {
    return $.ajax({
        url: `api/chats`,
        method: 'post',
        data: {chat:{title}}
    })
}

export const fetchChats = () => (
    $.ajax({
        url: `api/chats`,
        method: 'get'
    })
)

export const createMessage = (message) => {
    return $.ajax({
        url: `api/chats/${message.chat_id}/messages`,
        method: 'post',
        data: { message }
    })
}








