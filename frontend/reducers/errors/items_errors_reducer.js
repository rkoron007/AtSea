import { RECEIVE_ITEM,
        RECEIVE_ITEM_ERRORS
      } from "../../actions/item_actions";

export const itemsErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ITEM:
      return [];
    case RECEIVE_ITEM_ERRORS:
      return action.errors;
    default:
      return state;
  }
};


export default itemsErrorsReducer;
