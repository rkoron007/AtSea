import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      !loggedIn ? (
        <Component {...props} />):(
        <Redirect to="/" />
      )
    }
  />
);

const Protect = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);


const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectRoute = withRouter(connect(mapStateToProps)(Protect));
