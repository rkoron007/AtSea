import {connect} from 'react-redux';
import MessageForm from "./message_form";
import { fetchMessages,
     createChat,
     createMessage,
     receiveMessage,
     fetchChats } from "../../actions/message_actions";
import { openModal, closeModal } from "../../actions/ui_actions";

const msp = (state) => {
    return {
        messages: Object.values(state.entities.messages),
        chats: Object.values(state.entities.chats),
        modal: state.ui.modal
    }
}

const mdp = (dispatch) => ({
    fetchMessages: (chatId) => dispatch(fetchMessages(chatId)),
    createChat: (title) => dispatch(createChat(title)),
    createMessage: (message) => dispatch(createMessage(message)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    fetchChats: () => dispatch(fetchChats()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(MessageForm)