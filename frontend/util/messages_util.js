export const fetchMessages = (chatId) => (
    $.ajax({
        url: `api/chats/${chatId}`,
        method: 'get'
    })
)

export const createChat = () => (
    $.ajax({
        url: `api/chats`,
        method: 'post'
    })
)

export const createMessage = (message) => {
    return $.ajax({
        url: `api/chats/${message.chat_id}/messages`,
        method: 'post',
        data: { message }
    })
}








