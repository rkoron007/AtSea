import { RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM,
} from "../actions/item_actions";

import {
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from "../actions/user_actions";

const usersReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.payload.users;
    case RECEIVE_ITEM:
    newState = Object.assign({},
      {[action.payload.user.id]: action.payload.user});
      return newState;
    case RECEIVE_USER:
    newState = Object.assign({},
      {[action.payload.user.id]: action.payload.user});
      return newState;
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return state;
  }

};

export default usersReducer;
