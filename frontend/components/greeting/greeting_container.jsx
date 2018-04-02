import React from "react";
import {logout} from "../../actions/session_actions";
import { connect } from "react-redux";
import Greeting from "./greeting";

const mapStatetoProps = ({session}) =>({
  currentUser: session.currentUser
});

const mapDispatchtoProps = (dispatch) =>({
  logout: () => dispatch(logout())
});


export default (mapStatetoProps,
  mapDispatchtoProps)(Greeting);
