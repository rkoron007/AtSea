import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateItem,
  fetchItem,
  deleteItem } from "../../../actions/item_actions";
import ItemForm from "./item_form";

const mapStateToProps = ( state, ownProps ) => {
  const defaultItem = {
    id: '',
    title: '',
    description: '',
    price: '',
    imageUrl: null,
    userId: '',
    uploadedFile: null,
  };
  const fetchedItem = state.entities.items[ownProps.match.params.itemId];
  let item = fetchedItem || defaultItem;
  return {
    item,
    formTitle: "Update Your Product",
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processItemForm: (item) => dispatch(updateItem(item)),
    fetchItem: (itemId) => dispatch(fetchItem(itemId)),
    handleDelete: (itemId) => dispatch(deleteItem(itemId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
