import {
  RECEIVE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from "../actions/cart_actions";


const cartReducer = (state={}, action) =>{
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CART:
      return action.cart;
    case ADD_CART_ITEM:
      newState = Object.assign({}, state,
        {[action.cartItem.id]: action.cartItem});
      return newState;
    case REMOVE_CART_ITEM:
      newState = Object.assign({}, state);
      delete newState[action.cartItemId];
      return newState;
      default:
      return state;
  }

};

export default cartReducer;
