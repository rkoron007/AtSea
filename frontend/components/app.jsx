import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
  </div>
);
export default App;
