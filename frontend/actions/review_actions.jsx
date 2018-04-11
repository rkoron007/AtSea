import * as API from "../util/review_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});


const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

const receiveReviewErrors = (errors) =>({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});


export const deleteReview = (reviewId) => dispatch => {
  return API.deleteReview(reviewId).then(
    review => dispatch(removeReview(reviewId)),
    error => dispatch(receiveReviewErrors(error.responseJSON))
  );
};

export const createReview = (review) => dispatch => {
  return API.createReview(review).then(
    createdReview => dispatch(receiveReview(createdReview)),
    error => dispatch(receiveReviewErrors(error.responseJSON))
  );
};
