import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, receiveErrors } from "../../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ( { errors }) => {
  return {
    errors: errors.session,
    formType: "Sign in",
  };
};

const mapDispatchToProps = (dispatch) => {
    const demoUser = ({username:"USERNAME", password:"PASSWORD"});
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogin: () => (dispatch(login(demoUser))),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
