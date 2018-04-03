import React from  "react";
import { NavLink, Link } from "react-router-dom";

class Greeting extends React.Component {
  sessionLinks(){
    return (<nav className="new-session-btns">
        <Link to="/signup">Register</Link>
        <br></br>
        <Link to="/login">Log In</Link>
    </nav>
    );
  }


  navBarGreeting(){
      return (
        <nav>
          <p className="username">You</p>
          <button
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

export default Greeting;
