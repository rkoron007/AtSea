import React from "react";
import { connect } from "react-redux";
import { fetchItems, makeChange } from "../../actions/item_actions";
import { OrderItemsByPrice,
  OrderItemsByPriceD } from "../../reducers/item_price_selector";
import ItemsIndex from "./items_index";

const mapStateToProps = (state) => {
  let items;
  if (state.ui.searchType === "asc"){
    items = OrderItemsByPrice(state);
  } else if (state.ui.searchType === "desc"){
    items = OrderItemsByPriceD(state);
  } else {
    items = Object.values(state.entities.items);
  }

  return{
  items,
  users: state.entities.users};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex);
