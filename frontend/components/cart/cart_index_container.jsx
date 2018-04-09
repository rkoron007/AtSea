import React from "react";
import { connect } from "react-redux";
import CartIndex from "./cart_index";
import { fetchCart, removeItemfromCart } from "../../actions/cart_actions";


const mapStateToProps = ( state ) => {
  return {
    cartItems: Object.keys(state.entities.cart).map(
  id => state.entities.cart[id]),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCart:  () => dispatch(fetchCart()),
  removeItemfromCart: (cartItemId) => dispatch(removeItemfromCart(cartItemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);
