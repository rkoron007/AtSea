import * as APIMessage from "../util/messages_util";

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_CHAT = 'RECEIVE_CHAT'

const receiveMessages = (payload) => ({
    type: RECEIVE_MESSAGES,
    payload
})

export const receiveMessage = (payload) => ({
    type: RECEIVE_MESSAGE,
    payload
})
const receiveChat = (payload) => ({
    type: RECEIVE_CHAT,
    payload
})


export const fetchMessages = (chatId) => dispatch => (
    APIMessage.fetchMessages(chatId)
        .then(messages => dispatch(receiveMessages(messages)))
)

export const createChat = () => dispatch => (
    APIMessage.createChat()
        .then(chat => dispatch(receiveChat(chat)))
)


export const createMessage = (message) => dispatch => (
    APIMessage.createMessage(message)
)