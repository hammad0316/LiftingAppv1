import React, { Component } from "react";
import axios from "axios";

import "../bootstrap.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    axios.post("/api/v1/users", {
      data: {
        user: {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        }
      }
    });
  }

  render() {
    return (
      <div className="container col-md-3 ml-auto">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label> Email </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.onChange.bind(this)}
            />
          </div>
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
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
