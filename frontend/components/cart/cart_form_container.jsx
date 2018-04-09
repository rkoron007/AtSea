import React from "react";
import { connect } from "react-redux";
import CartForm from "./cart_form";
import { addItemtoCart } from "../../actions/cart_actions";

const mapStateToProps = ( state, ownParams ) => {

  const item = state.entities.items[ownParams.item.id];
  return {
    item,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItemtoCart: (cartItem) => dispatch(addItemtoCart(cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);
