import React from "react";
import { connect } from "react-redux";
import FavoriteForm from "./favorite_form";
import { createFavorite,
  deleteFavorite } from "../../actions/favorite_actions";

const mapStateToProps = ( state, ownProps ) => {
  let currentUser = state.session.currentUser;
  let isFavorite = ownProps.liked;
  let itemId = ownProps.itemId;

  return {
    itemId,
    isFavorite: ownProps.liked,
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createFavorite: (itemId) => dispatch(createFavorite(itemId)),
  deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteForm);
