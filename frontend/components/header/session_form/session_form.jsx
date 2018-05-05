import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogic = this.handleDemoLogic.bind(this);
  }

  renderErrors() {
    if (this.props.errors){
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key = {`${i}`}>{error}</li>))}
      </ul>
        );
      }
    }

  updateField(input){
    return ((e) =>
      this.setState({[input]: e.target.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();

    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("hidden");

    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({ username: "", password:""});
  }

  componentWillUnmount(){
    return this.props.clearErrors();
  }

  handleDemoLogic(){
    return (e) => {
      console.log(e);
      e.preventDefault();

      let body = document.getElementsByTagName("body")[0];
      body.classList.remove("hidden");

      this.props.demoLogin();
    };
  }


  render(){
    return(
      <div>
        <form className="session-form-container" onSubmit = { this.handleSubmit }>
          <h3 className="session-header">{this.props.formType}</h3>
          <div>{this.renderErrors()}</div>
          <label className="session-username">Username
            <input
              type="text"
              value ={this.state.username}
              onChange={this.updateField("username")}>
            </input>
          </label>
          <label>Password
            <input
              type="password"
              value ={this.state.password}
              onChange={this.updateField("password")}>
            </input>
          </label>
          <button className="session-form-btn">{this.props.formType}</button>
          <div className="demo-btn">
            <button onClick={this.handleDemoLogic()}>Demo</button>
          </div>
        </form>
      </div>
    );
  }
}



export default withRouter(SessionForm);
