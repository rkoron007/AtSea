import React from  "react";
import { NavLink, Link } from "react-router-dom";

class SessionButtons extends React.Component {
  sessionLinks(){
    return (
    <nav className="new-session-btns">
      <ul>
          <li><Link
            to="/signup"
            ClassName="register">
            Register</Link>
          </li>

          <li><NavLink
            className="sign-in-btn"
            to="/login">Sign In</NavLink>
          </li>

          <li>
            <button
              className="demo"
              onClick={this.props.demologin}
            >Demo</button>
          </li>

          <li><NavLink
            to="/carts" ClassName="carts-link">
            <i className="fa fa-shopping-cart fa-2x"></i>
            <br></br>
						<p>Cart</p>
            </NavLink>
          </li>

        </ul>
  </nav>
    );
  }


  navBarGreeting(){
      return (
        <nav className="current-session-btns">

          <p className="current-user">You</p>
          <button className="logout-button"
            onClick={this.logout}
            >Logout
          </button>
      </nav>
    );
  }

  render(){
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    return(
      <div>
          {this.currentUser ? this.navBarGreeting() : this.sessionLinks()}
      </div>
    );
  }
}

export default SessionButtons;
