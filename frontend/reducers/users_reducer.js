import { RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
} from "../actions/item_actions";

const usersReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.payload.users;
    case RECEIVE_ITEM:
      return state;
    default:
      return state;
  }

};

export default usersReducer;
