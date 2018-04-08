import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
import Splash from "../splash/splash";
import ItemIndexContainer from "../items/items_index_container";
import CategoriesBar from "../categories/categories_bar";
import Modal from "../header/session_form/modal";

const MainPageContainer = () => (
  <div className="main-page">
    <Route exact path="/" component={ Splash } />
    <Route exact path="/login" component={ Splash } />
    <Route exact path="/signup" component={ Splash } />
    <Route exact path="/" component={ ItemIndexContainer } />
    <Route exact path="/login" component={ ItemIndexContainer } />
    <Route exact path="/signup" component={ ItemIndexContainer } />
  </div>
);
export default MainPageContainer;
