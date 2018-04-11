import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";

import { RECEIVE_ITEM } from "../actions/item_actions";

const reviewsReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ITEM:
      return action.payload.reviews || {};
    case RECEIVE_REVIEW:
      newState = Object.assign({},state,
        {[action.review.id]:action.review});
      return newState;
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
      default:
      return state;
  }

};

export default reviewsReducer;
