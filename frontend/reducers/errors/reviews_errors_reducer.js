import { RECEIVE_REVIEW,
        RECEIVE_REVIEW_ERRORS
      } from "../../actions/review_actions";

export const reviewsErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};


export default reviewsErrorsReducer;
