import React from "react";
import { connect } from "react-redux";
import { receiveSearchType } from "../../../actions/item_actions";
import FilterForm from "./filter_form";

const mapStateToProps = (state) => {
  return{
  users: state.entities.users};
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSearchType: (type) => dispatch(receiveSearchType(type))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
