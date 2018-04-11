import React from  "react";
import { NavLink, Link } from "react-router-dom";

class SessionButtons extends React.Component {
  sessionLinks(){
    return (
    <nav className="new-session-btns">
      <ul>
          <li><Link
            to="/signup"
            className="register">
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

      </ul>
  </nav>
    );
  }


  navBarGreeting(){
      return (
      <nav className="current-session-btns">
        <ul>
          <li>
              <div
                className="session-user-picture">
                <Link to={`/users/${this.currentUser.id}`}>
                <img src={this.currentUser.imgUrl}className="user-image"></img>
                </Link>
              </div>
            <h3
            className="current-user">
            <Link to={`/users/${this.currentUser.id}`}>
              {this.props.currentUser.username}
              </Link>
            </h3>
          </li>
          <li>
            <button className="logout-button"
              onClick={this.logout}
              >Logout
            </button>
          </li>
          <li className="carts-link">
            <Link
              to="/carts">
              <i className="fa fa-shopping-cart fa-2x"></i>
              <br></br>
  						<p>Cart</p>
              </Link>
          </li>
        </ul>
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
