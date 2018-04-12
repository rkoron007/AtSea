import { RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM,
  RECEIVE_SEARCH_ITEMS,
  CLEAN_ITEMS
} from "../actions/item_actions";

import {
  RECEIVE_USER,
} from "../actions/user_actions";

const itemsReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.payload.items;
    case RECEIVE_SEARCH_ITEMS:
      return action.payload.items;
    case CLEAN_ITEMS:
      return {};
    case RECEIVE_USER:
      return action.payload.items;
    case RECEIVE_ITEM:
      newState = Object.assign({}, action.payload.items,
        {[action.payload.item.id]:action.payload.item});
      return newState;
    case REMOVE_ITEM:
      newState = Object.assign({}, state);
      delete newState[action.itemId];
      return newState;
      default:
      return state;
  }

};

export default itemsReducer;
