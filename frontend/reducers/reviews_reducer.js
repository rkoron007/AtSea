import { RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";


const reviewsReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.payload;
    case RECEIVE_REVIEW:
      newState = Object.assign({},
        {[action.payload.review.id]:action.payload.review});
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
