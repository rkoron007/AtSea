import React from "react";
import { connect } from "react-redux";
import { fetchItems, requestItemsByCart, makeChange } from "../../actions/item_actions";
import ItemsIndex from "./items_index";

const mapStateToProps = (state) => {
  return{
  items: Object.keys(state.entities.items).map(
    id => state.entities.items[id]),
  users: state.entities.users};
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex);
