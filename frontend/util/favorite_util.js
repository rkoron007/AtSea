
export const createFavorite = (itemId) => (
  $.ajax({
    method: "POST",
    url: `api/favorites/`,
    data: {favorite:{item_id: itemId}}
  })
);


export const deleteFavorite = (itemId) => (
  $.ajax({
    method: "DELETE",
    url: `api/favorites/`,
    data: {favorite:{item_id: itemId}}
  })
);
