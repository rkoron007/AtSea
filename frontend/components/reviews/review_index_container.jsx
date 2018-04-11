import React from "react";
import { connect } from "react-redux";
import { createReview,
  deleteReview } from "../../actions/review_actions";
import ReviewsIndex from "./review_index";

const mapStateToProps = (state, ownProps) => {
  let reviews;
  if (state.entities.reviews) {
    reviews = Object.keys(state.entities.reviews).map(
      id => state.entities.reviews[id]);
  }
  return { itemId: ownProps.itemId,
  reviews,
  currentUser: state.session.currentUser};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);
