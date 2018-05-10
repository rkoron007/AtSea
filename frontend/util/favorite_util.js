
export const createFavorite = (itemId) => (
  $.ajax({
    method: "POST",
    url: `api/favorites/`,
    data: {itemId}
  })
);


export const deleteFavorite = (favoriteId) => (
  $.ajax({
    method: "DELETE",
    url: `api/favorites/${favoriteId}`,
  })
);
