import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/item_actions";
import ItemsIndex from "./items_index";

const mapStateToProps = (state) => ({
  items: Object.keys(state.entities.items).map(
    id => state.entities.items[id]),
  users: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
    fetchItems: () => dispatch(fetchItems())
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemsIndex);
