import React from "react";
import { connect } from "react-redux";
import { createItem, receiveErrors } from "../../../actions/item_actions";
import ItemForm from "./item_form";

const mapStateToProps = ( state, ownProps ) => {
  const item = { title: "",
    description: "",
    price:"",
    imgUrl:"",
    userId:"",
  };

  return {
    item,
    formType: "Create Item",
    formTitle: "Create a New Product!",
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processItemForm: (item) => dispatch(createItem(item)),
    clearErrors: () => dispatch(receiveErrors([])),
    handleDelete: null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
