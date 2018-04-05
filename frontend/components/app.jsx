import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import MainPageContainer from "./mainpage/mainpage";
import ItemIndexContainer from "./items/items_index_container";
import FilterForm from "./items/index_filter/filter_form";
import CategoriesBar from "./categories/categories_bar";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <CategoriesBar />
    <MainPageContainer />
    <div className="filter-and-index">
      <Route exact path="/items" component={FilterForm } />
      <Route exact path="/items" component={ ItemIndexContainer }/>
    </div>
  </div>
);
export default App;
