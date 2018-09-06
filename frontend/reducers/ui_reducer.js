
import {
  RECEIVE_SEARCH_TYPE
} from "../actions/item_actions";

import { OPEN_MODAL, CLOSE_MODAL } from "../actions/ui_actions";


const uiReducer = (state = { modal: false, searchType: {}}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SEARCH_TYPE:
      return {searchType: action.searchType};
    case OPEN_MODAL:
      return { modal: true };
    case CLOSE_MODAL:
      return { modal: false };
    default:
    return state;
  }

};

export default uiReducer;
