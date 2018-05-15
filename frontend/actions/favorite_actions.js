import * as API from "../util/favorite_util";


import { receiveItem } from "./item_actions";

// export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
// export const REMOVE_FAVORITE = "REMOVE_FAVORITEs";

// const receiveFavorite = (favorite) => ({
//     type: RECEIVE_FAVORITE,
//     favorite
// });
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

export const createFavorite = (favorite) => dispatch => (
    API.createFavorite(favorite).then(
    item => dispatch(receiveItem(item))
  )
);
