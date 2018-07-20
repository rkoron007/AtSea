import { RECEIVE_USER } from "../actions/user_actions";
import { FETCH_FAVORITES } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.favorites || {};
    case FETCH_FAVORITES:
      return action.payload.favorites || {};
    default:
      return state;
  }
};

export default favoritesReducer;
