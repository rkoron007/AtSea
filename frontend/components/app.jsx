import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import GreetingContainer from "./greeting/greeting";
import { AuthRoute, ProtectRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <h1>AtSea</h1>
      <Route path="/" component={ GreetingContainer }/>
    </header>

    <AuthRoute exact path="/login" component={ LoginFormContainer }/>
    <AuthRoute exact path="/signup" component={ SignupFormContainer }/>
  </div>
);
export default App;
