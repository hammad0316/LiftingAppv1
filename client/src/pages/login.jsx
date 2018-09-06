import React, { Component } from "react";

import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {}

  render() {
    return (
      <div className="container col-md-3 ml-auto">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label> Username </label>
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label> Password </label>
            <input
              className="form-control"
              type="password"
              ref="password"
              placeolder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
