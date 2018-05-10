import * as API from "../util/favorite_util";

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITEs";

const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite
});

const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE,
    favoriteId
});

export const deleteFavorite = (favoriteId) => dispatch => (
  API.deleteFavorite(favoriteId).then(
    favorite => dispatch(removeFavorite(favoriteId))
  )
);

export const createFavorite = (favorite) => dispatch => (
    API.createFavorite(favorite).then(
    createdFavorite => dispatch(receiveFavorite(createdFavorite))
  )
);
