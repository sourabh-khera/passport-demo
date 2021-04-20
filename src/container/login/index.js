import React, { Component } from "react";
import TextInput from "../../components/textInput";
import LoginButton from "../../components/button";
import "./style.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (event) => {
    const {
      target: { value, name },
    } = event;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login_container">
        <div className="login_inputs_container">
          <div className="title">Login</div>
          <div className="text_input_container">
            <TextInput
              placeholder="Username"
              handleChange={this.handleChange}
              name="username"
              value={this.state.username}
              type="text"
            />
            <TextInput
              placeholder="Password"
              handleChange={this.handleChange}
              name="password"
              value={this.state.password}
              type="password"
            />
          </div>
          <div className="login_button_container">
            <LoginButton text="Login" handleClick={() => {}} />
          </div>
          <LoginButton text="Google-Sign-In" handleClick={() => {}} />
        </div>
      </div>
    );
  }
}

export default Login;
