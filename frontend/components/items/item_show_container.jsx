import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../actions/item_actions";
import ItemShow from "./item_show";

const mapStateToProps = (state, ownParams) => {
  const item = state.entities.items[ownParams.match.params.itemId];
  const items = Object.keys(state.entities.items).map(
    id => state.entities.items[id]);
  return { item,
    user: Object.values(state.entities.users)[0],
    items
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItem: (itemId) => dispatch(fetchItem(itemId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
