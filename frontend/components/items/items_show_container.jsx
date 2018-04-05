import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../../actions/item_actions";
import ItemShow from "./item_show";

const mapStateToProps = (state, ownParams) => {
  return { item: state.entities.items[ownParams.match.params.itemId],
    user: state.entities.user};
};

const mapDispatchToProps = (dispatch) => ({
  fetchItem: (itemId) => dispatch(fetchItems(itemId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
