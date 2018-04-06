import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import MainPageContainer from "./mainpage/mainpage";
import CategoriesBar from "./categories/categories_bar";

import ItemIndexContainer from "./items/items_index_container";
import ItemShowContainer from "./items/items_show_container";

import ItemEditContainer from "./items/item_form/item_edit_container";
import ItemCreateContainer from "./items/item_form/item_create_container";

import FilterForm from "./items/index_filter/filter_form";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <Route path ="/" component={CategoriesBar} />
      <Switch>
        <Route exact path ="/" component={MainPageContainer} />
        <Route exact path="/items/new"
          component={ ItemCreateContainer }/>
        <Route exact path="/items/:itemId/edit"
          component={ ItemEditContainer }/>
        <Route exact path="/items/:itemId"
          component={ ItemShowContainer }/>
        <Route exact path="/items" component={ ItemIndexContainer }/>
        <Redirect to="/" />
      </Switch>
  </div>
);
export default App;
