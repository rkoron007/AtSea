import {
    RECEIVE_CHAT,
    RECEIVE_MESSAGES,
    RECEIVE_CHATS
} from "../actions/message_actions";
import {merge} from "lodash"

const chatReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CHAT:
            newState = merge({}, state, {[action.payload.chat.id]:action.payload.chat})
            return newState;
        // case RECEIVE_MESSAGES:
        //     return action.payload.chat || {};
        case RECEIVE_CHATS:
            return action.payload.chats || {};
        default:
            return state;
    }

};

export default chatReducer;
