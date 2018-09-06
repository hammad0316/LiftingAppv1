import React, { Component, Fragment } from "react";
import "../App.css";

class Login extends Component {
  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <Fragment>
        <h1>Login page</h1>
      </Fragment>
    );
  }
}

export default Login;
