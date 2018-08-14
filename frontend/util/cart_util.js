export const fetchCart = () => (
  $.ajax({
    method: "GET",
    url: `api/carts/`,
  })
);

export const addCartItem = (cartItem) => (
  $.ajax({
    method: "POST",
    url: `api/cart_items`,
    data: { cartItem }
  })
);

export const removeCartItem = (cartItemId) => (
  $.ajax({
    method: "DELETE",
    url: `api/cart_items/${cartItemId}`,
  })
);
