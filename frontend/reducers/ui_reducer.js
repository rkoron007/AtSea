
import {
  RECEIVE_SEARCH_TYPE
} from "../actions/item_actions";

const uiReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SEARCH_TYPE:
      return {searchType: action.searchType};
      default:
      return state;
  }

};

export default uiReducer;
