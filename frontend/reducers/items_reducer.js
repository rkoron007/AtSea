import { RECEIVE_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
} from "../actions/item_actions";

const itemsReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.payload.items;
    case RECEIVE_ITEM:
      newState = Object.assign({}, state, {[action.item.id]:action.item});
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
