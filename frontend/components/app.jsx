import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

// import LoginFormContainer from "./header/session_form/login_form_container";
// import SignupFormContainer from "./header/session_form/signup_form_container";
import Modal from "./header/session_form/modal";
import SessionButtonsContainer from "./header/session_buttons/session_buttons_container";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h3>AtSea</h3>
      </Link>
      <SessionButtonsContainer />
    </header>
    <AuthRoute exact path="/login" component={ Modal }/>
    <AuthRoute exact path="/signup" component={ Modal }/>
  </div>
);
export default App;
