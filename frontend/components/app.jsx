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
// import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <Route exact path="/login" component={ LoginFormContainer }/>
    <Route exact path="/signup" component={ SignupFormContainer }/>
  </div>
);
export default App;
