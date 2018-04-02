import React from  "react";
import { NavLink, Link } from "react-router-dom";


const sessionLinks = () => {
  return(
    <nav className="nav-bar">
      <Link to="/signup">Register</Link>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  );
};

const personalGreeting = (currentUser, logout) =>{
  return(
    <nav>
      <p className="username">You</p>
      <NavLink
        to="/logout"
        className="logout-link"
        >
      </NavLink>
    </nav>
  );
};

const Greeting = ( props ) => (
  props.currentUser ? personalGreeting(props.currentUser, props.logout) : sessionLinks()
);

export default Greeting;
