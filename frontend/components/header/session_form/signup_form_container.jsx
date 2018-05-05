import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup, login, receiveErrors } from "../../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ( { errors }) => {
  return {
    errors: errors.session,
    formType: "Register",
  };
};

const mapDispatchToProps = (dispatch) => {
  const demo = ({username: "USERNAME", password: "PASSWORD"});
  return {
    processForm: (user) => dispatch(signup(user)),
    demoLogin: () => dispatch(login(demo)),
    clearErrors: () => dispatch(receiveErrors([])),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
