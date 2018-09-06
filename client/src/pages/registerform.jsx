import React, { Component } from "react";
import axios from "axios";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
          password: this.state.password
        }
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label> Email </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label> Password </label>
            <input
              type="password"
              ref="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Signup" />
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
