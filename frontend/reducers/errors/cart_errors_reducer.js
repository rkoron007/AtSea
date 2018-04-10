import { RECEIVE_CART,
        RECEIVE_CART_ERRORS
      } from "../../actions/cart_actions";

export const CartErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CART:
      return [];
    case RECEIVE_CART_ERRORS:
      return action.errors;
    default:
      return state;
  }
};


export default CartErrorsReducer;
