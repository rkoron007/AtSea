import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup, receiveErrors } from "../../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ( { errors }) => {
  return {
    errors: errors.session,
    formType: "Register",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),

    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
