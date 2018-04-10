import * as API from "../util/review_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReview = (payload) => ({
    type: RECEIVE_REVIEW,
    payload
});

const receiveReviews = (payload) => ({
    type: RECEIVE_REVIEWS,
    payload
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

const receiveReviewErrors = (errors) =>({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});



export const fetchReviews = (itemId) => dispatch => {
  return API.fetchReviews(itemId).then(
    reviews => dispatch(receiveReviews(reviews)),
    error => dispatch(receiveReviewErrors(error.responseJSON))
  );
};

export const deleteReview = (reviewId) => dispatch => {
  return API.deleteReview(reviewId).then(
    review => dispatch(removeReview(reviewId)),
    error => dispatch(receiveReviewErrors(error.responseJSON))
  );
};

export const createReview = (review, itemId) => dispatch => {
  return API.createReview(review, itemId).then(
    createdReview => dispatch(receiveReview(createdReview)),
    error => dispatch(receiveReviewErrors(error.responseJSON))
  );
};
