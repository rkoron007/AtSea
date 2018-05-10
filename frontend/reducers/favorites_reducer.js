import {
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE
} from "../actions/favorite_actions";

import { RECEIVE_ITEM } from "../actions/item_actions";

import { RECEIVE_USER } from "../actions/user_actions";

const favoritesReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.favorites || {};
    case RECEIVE_ITEM:
      return action.payload.favorites || {};
    case REMOVE_FAVORITE:
      newState = Object.assign({}, state);
      delete newState[action.favoriteId];
      return newState;
    case RECEIVE_FAVORITE:
      newState = Object.assign({},state,
      {[action.favorite.id]:action.favorite});
      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;
