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
    if (this.props.errors.session){
    return (
      <ul>
        {this.props.errors.session.map((error, i) => (
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({ username: "", password:""});
  }

  render(){
    return(
      <div className="session-form-container">
        <form onSubmit = { this.handleSubmit }>
          <h3>{this.props.formType}</h3>
          {this.renderErrors()}
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
