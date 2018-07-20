import React from "react";
import { connect } from "react-redux";
import { fetchFavorites } from "../../actions/favorite_actions";
import FavoriteIndex from "./favorite_index";

const mapStateToProps = (state, ownParams) => {
  let favorites;
  favorites = Object.values(state.entities.favorites);
  return {
    favorites,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);
