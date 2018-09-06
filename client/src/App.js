import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "./bootstrap.css";
import NavBar from "./components/navbar";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Table from "./pages/table";
import RegisterForm from "./pages/registerform";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <br />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />
        </div>
      </Router>
    );
  }
}

export default App;
