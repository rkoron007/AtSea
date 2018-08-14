import {connect} from 'react-redux';
import MessageForm from "./message_form";
import { fetchMessages, createChat, createMessage, receiveMessage } from "../../actions/message_actions";

const msp = (state) => {
    return {
        messages: Object.values(state.entities.messages),
        chats: Object.values(state.entities.chats)
    }
}

const mdp = (dispatch) => ({
    fetchMessages: (chatId) => dispatch(fetchMessages(chatId)),
    createChat: () => dispatch(createChat()),
    createMessage: (message) => dispatch(createMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(msp, mdp)(MessageForm)