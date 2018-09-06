import * as APIMessage from "../util/messages_util";

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_CHAT = 'RECEIVE_CHAT'
export const RECEIVE_CHATS = 'RECEIVE_CHATS'

const receiveMessages = (payload) => {
    return {
    type: RECEIVE_MESSAGES,
    payload
    }
}

export const receiveMessage = (payload) => ({
    type: RECEIVE_MESSAGE,
    payload
})

export const receiveChat = (payload) => ({
    type: RECEIVE_CHAT,
    payload
})

export const receiveChats = (payload) => ({
    type: RECEIVE_CHATS,
    payload
})


export const fetchMessages = (chatId) => dispatch => (
    APIMessage.fetchMessages(chatId)
        .then(messages => dispatch(receiveMessages(messages)))
)

export const createChat = (title) => dispatch => (
    APIMessage.createChat(title)
        .then(chat => dispatch(receiveChat(chat)))
)

export const fetchChats = () => dispatch => (
    APIMessage.fetchChats()
        .then(chats => {
            return dispatch(receiveChats(chats))
        })
)


export const createMessage = (message) => dispatch => (
    APIMessage.createMessage(message)
)