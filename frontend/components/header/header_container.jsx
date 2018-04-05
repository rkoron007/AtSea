import React from "react";
import { connect } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import Modal from "./session_form/modal";
import SessionButtonsContainer from "./session_buttons/session_buttons_container";
import SearchContainer from "./search/search_index";

import { AuthRoute, ProtectRoute } from '../../util/route_util';


class HeaderContainer extends React.Component{
  render(){
    return(
      <div className="header">
        <div className="header-left">
        <Link to="/" className="header-link">
          <i className="fa fa-anchor fa-3x" aria-hidden="true"></i>
          <h2>AtSea</h2>
        </Link>

        <SearchContainer />
        </div>
        <div className="header-right">
        <SessionButtonsContainer />
        </div>
          <AuthRoute exact path="/login" component={ Modal }/>
          <AuthRoute exact path="/signup" component={ Modal }/>
      </div>
    );
  }
}

export default HeaderContainer;
