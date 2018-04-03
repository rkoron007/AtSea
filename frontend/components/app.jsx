import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h3>AtSea</h3>
      </Link>
      <GreetingContainer />
    </header>

    <Route exact path="/login" component={ LoginFormContainer }/>
    <Route exact path="/signup" component={ SignupFormContainer }/>
  </div>
);
export default App;
