import React from "react";
import { connect } from "react-redux";
import SearchForm from "./search_form";
import { searchItems } from "../../../actions/item_actions";

const mapStateToProps = ( state ) => (
  null
);

const mapDispatchToProps = (dispatch) => ({
  searchItems: (query) => dispatch(searchItems(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
