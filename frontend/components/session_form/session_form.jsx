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
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key = {`${i}`}>{error}</li>))}
          </ul>
        );
      }


  updateField(input){
    return ((e) =>
      this.setState({[input]: e.currentTarget.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({ username: "", password:""});
  }

  render(){
    return(
      <div className="session-form-container">
        <form onSubmit = { this.handleSubmit }>
          <p>{this.props.formType}</p>
          <label>Username
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
          <input
            className="session-form-btn"
            type="submit"
            value={this.props.formType}>
          </input>
        </form>
      </div>
    );
  }
}



export default withRouter(SessionForm);
