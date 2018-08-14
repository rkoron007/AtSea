import {
    RECEIVE_CHAT,
    RECEIVE_MESSAGES
} from "../actions/message_actions";


const chatReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CHAT:
            return action.payload.chat || {};
        case RECEIVE_MESSAGES:
            return action.payload.chat || {};
        default:
            return state;
    }

};

export default chatReducer;
