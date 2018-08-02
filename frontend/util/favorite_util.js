
export const createFavorite = (itemId) => (
  $.ajax({
    method: "POST",
    url: `api/favorites/`,
    data: {favorite:{item_id: itemId}}
  })
);


export const deleteFavorite = (itemId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/favorites/${itemId}`,
    data: { favorite: { item_id: itemId } }
  })
};

export const fetchFavorites = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/favorites/`
  })
};
