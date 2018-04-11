import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";

const mapStateToProps = ( state, ownProps ) => {

  return {
    itemId: ownProps.itemId,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  createReview: (review, itemId) => dispatch(createReview(review, itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
