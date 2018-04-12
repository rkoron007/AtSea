import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CategoriesBar from "./categories_bar";
import { searchItems } from "../../actions/item_actions";

const mapStateToProps = ( state, ownProps ) => ({
  items: state.entities.items
});

const mapDispatchToProps = (dispatch) => ({
  searchItems: (query) => dispatch(searchItems(query))
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(CategoriesBar));
