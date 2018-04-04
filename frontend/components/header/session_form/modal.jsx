import React from "react";
import LoginFormContainer from "./login_form_container";
import SignUpFormContainer from "./signup_form_container";
import { AuthRoute } from "../../../util/route_util";
import { NavLink } from "react-router-dom";

class Modal extends React.Component{
  render(){
    return (
      // <section> with two <Link> components
      // Two Route components:
      <div className="modal-back-drop">
        <div className="modal-window">
          <section>
            <NavLink to="/login" activeClassName="selected">Sign In</NavLink>
            <NavLink to="/signup" activeClassName="selected">Register</NavLink>
          </section>

          <AuthRoute exact path="/login" component={ LoginFormContainer }/>
          <AuthRoute exact path="/signup" component={ SignUpFormContainer }/>

         </div>
       </div>
     );
    }
}


export default Modal;
