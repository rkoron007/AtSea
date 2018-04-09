import React from "react";
import { connect } from "react-redux";
import {
  createItem,
  receiveErrors,
  fetchItem
} from "../../../actions/item_actions";
import ItemForm from "./item_form";
import {withRouter} from "react-router-dom";

const mapStateToProps = ( state, ownProps ) => {
  return {
    formTitle: "Create a New Product!",
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processItemForm: (item) => dispatch(createItem(item)),
    fetchItem: (itemId) => dispatch(fetchItem(itemId)),
    clearErrors: () => dispatch(receiveErrors([])),
    handleDelete: null
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemForm));
