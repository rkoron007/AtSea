import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullCurrentUser = ({
  currentUser: null
});


const sessionReducer = (state = _nullCurrentUser, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, {currentUser: action.currentUser});
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
