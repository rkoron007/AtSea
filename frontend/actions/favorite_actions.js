import * as API from "../util/favorite_util";


import { receiveItem } from "./item_actions";

export const FETCH_FAVORITES = "FETCH_FAVORITES"

export const receiveFavorites = (payload) => {
  return ({ type: FETCH_FAVORITES,
  payload});
};
// export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
// export const REMOVE_FAVORITE = "REMOVE_FAVORITEs";
//
// const removeFavorite = (favoriteId) => ({
//     type: REMOVE_FAVORITE,
//     favoriteId
// });

export const deleteFavorite = (itemId) => dispatch => (
  API.deleteFavorite(itemId).then(
    item => dispatch(receiveItem(item))
  )
);

export const fetchFavorites = (userId) => dispatch => {
  return API.fetchFavorites(userId).then(
    favorites => dispatch(receiveFavorites(favorites))
  )
};

export const createFavorite = (favorite) => dispatch => (
    API.createFavorite(favorite).then(
    item => dispatch(receiveItem(item))
  )
);
