import React from "react";
import { connect } from "react-redux";
import { fetchFavorites } from "../../actions/fav_actions";
import FavoriteIndex from "./favorite_index";

const mapStateToProps = (state, ownParams) => {
  let favorites;
  let favorites = Object.values(state.entities.favorites);

  return {
    favorites,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(fetchFavorites()),
});


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);
