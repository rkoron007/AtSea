import React from "react";
import LoginFormContainer from "./login_form_container";
import SignUpFormContainer from "./signup_form_container";
import { AuthRoute } from "../../../util/route_util";
import { NavLink, Redirect } from "react-router-dom";

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:true
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
   this.setState({open: false}, this.props.history.push('/'));
 }

  render(){
    if(!this.state.open) return null;
    return (
      <div>
        <div className='modal-backdrop'onClick={this.handleClick}>
        </div>
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
