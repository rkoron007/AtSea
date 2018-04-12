import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../actions/item_actions";
import ItemShow from "./item_show";

const mapStateToProps = (state, ownParams) => {
  const  item = state.entities.items[ownParams.match.params.itemId];
  const  items = Object.keys(state.entities.items).map(
      id => state.entities.items[id]);

  let user;
  let userFind = Object.values(state.entities.users);
  if (userFind.length > 0){
    user = userFind[0];
  }

  return {
    item,
    items,
    user,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItem: (itemId) => dispatch(fetchItem(itemId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
