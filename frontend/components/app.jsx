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
import ItemShowContainer from "./items/item_show_container";

import ItemEditContainer from "./items/item_form/item_edit_container";
import ItemCreateContainer from "./items/item_form/item_create_container";

import Modal from "./header/session_form/modal";
import { AuthRoute, ProtectRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>

    <Route path ="/" component={CategoriesBar} />
    <Route exact path ="/"  component={MainPageContainer} />


    <Switch>
        <ProtectRoute exact path="/items/new"
          component={ ItemCreateContainer }/>
        <ProtectRoute exact path="/items/:itemId/edit"
          component={ ItemEditContainer }/>
        <Route exact path="/items/:itemId"
          component={ ItemShowContainer }/>
        <Route exact path="/items" component={ ItemIndexContainer }/>
        <AuthRoute exact path="/login" component={ Modal }/>
        <AuthRoute exact path="/signup" component={ Modal }/>
        <Route exact path ="/" component={MainPageContainer} />
        <Redirect to="/" />
      </Switch>
  </div>
);
export default App;