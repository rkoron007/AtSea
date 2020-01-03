import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullCurrentUser = {
  currentUser: null
};

const sessionReducer = (state = _nullCurrentUser, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
