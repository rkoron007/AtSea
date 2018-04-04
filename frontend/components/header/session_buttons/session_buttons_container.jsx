import React from "react";
import { logout, login  } from "../../../actions/session_actions";
import { connect } from "react-redux";
import SessionButtons from "./session_buttons";

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  const demoUser = { username:"USERNAME", password:"PASSWORD"};
  return({
  logout: () => dispatch(logout()),
  demologin: () => dispatch(login(demoUser)),
  });
};


export default connect(mapStateToProps,
  mapDispatchToProps)(SessionButtons);
