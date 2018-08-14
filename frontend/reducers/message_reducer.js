import {
    RECEIVE_CHAT,
    RECEIVE_MESSAGES,
    RECEIVE_MESSAGE
} from "../actions/message_actions";
import {merge} from "lodash"

const messageReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_CHAT:
            return action.payload.messages || {};
        case RECEIVE_MESSAGES:
            return action.payload.messages || {};
        case RECEIVE_MESSAGE:
            newState = merge({}, state, {[action.payload.id]: action.payload})
            return newState;
        default:
            return state;
    }

};

export default messageReducer;
