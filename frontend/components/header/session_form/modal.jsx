import React from "react";
import { AuthRoute } from "../../../util/route_util";
import { NavLink, Redirect } from "react-router-dom";

import LoginFormContainer from "./login_form_container";
import SignUpFormContainer from "./signup_form_container";

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:true
    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
    if (this.state.open) {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      let body = document.getElementsByTagName("body")[0];
      body.classList.add("hidden");
    }
  }

  handleClick() {
    let body = document.getElementsByTagName("body")[0];
        body.classList.remove("hidden");
   this.setState({open: false}, this.props.history.push('/'));
  }

  render(){
    if (!this.state) { return null;}

    return (
      <div>
        <div
          className='modal-backdrop'
          onClick={() => this.handleClick()}>
        </div>
        <div className="modal-window">
          <div className="modal-header">
            <section className="modal-header">
                <NavLink to="/signup"
                  activeClassName="selected">Register</NavLink>
              <NavLink to="/login"
                activeClassName="selected">Sign In</NavLink>
            </section>
          </div>
          <AuthRoute exact path="/login" component={ LoginFormContainer }/>
          <AuthRoute exact path="/signup" component={ SignUpFormContainer }/>
        </div>
    </div>
    );
  }
}



export default Modal;
