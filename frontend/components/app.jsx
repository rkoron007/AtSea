import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
import Splash from "./splash/splash";
import HeaderContainer from "./header/header_container";
import ItemIndexContainer from "./items/items_index_container";
import CategoriesBar from "./categories/categories_bar";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <CategoriesBar />
    <Route exact path="/" component={ Splash } />
    <ItemIndexContainer />
  </div>
);
export default App;
