import * as API from "../util/cart_util";


export const RECEIVE_CART = "RECEIVE_CART";
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

const receiveCart = ( cart) => ({
  type: RECEIVE_CART,
  cart
});

const addCartItem = (cartItem) => ({
  type: ADD_CART_ITEM,
  cartItem
});

const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId
});

const receiveCartErrors = (errors) =>({
    type: RECEIVE_CART_ERRORS,
    errors
});

export const fetchCart = () => dispatch => {
    return API.fetchCart().then(
      cart => dispatch(receiveCart(cart)),
      error => dispatch(receiveCartErrors(error.responseJSON))
    );
};

export const addItemtoCart = (cartItem) => dispatch => {
    return API.addCartItem(cartItem).then(
      addedcartItem => dispatch(addCartItem(addedcartItem)),
      error => dispatch(receiveCartErrors(error.responseJSON))
    );
};

export const removeItemfromCart = (cartItemId) => dispatch => {
    return API.removeCartItem(cartItemId).then(
      deletedCartItem => dispatch(removeCartItem(cartItemId)),
      error => dispatch(receiveCartErrors(error.responseJSON))
    );
};
