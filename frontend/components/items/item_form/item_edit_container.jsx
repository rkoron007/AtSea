import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateItem,
  fetchItem,
  receiveItemErrors,
  deleteItem } from "../../../actions/item_actions";
import ItemForm from "./item_form";

const mapStateToProps = ( state, ownProps ) => {
  const item = state.entities.items[ownProps.match.params.itemId];
  return {
    item,
    formTitle: "Update Your Product",
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processItemForm: (item) => dispatch(updateItem(item)),
    clearErrors: () => dispatch(receiveItemErrors([])),
    fetchItem: (itemId) => dispatch(fetchItem(itemId)),
    handleDelete: (itemId) => dispatch(deleteItem(itemId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
