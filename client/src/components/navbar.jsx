import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          LiftingApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbar-light" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">
                Lifts Table
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/graphs">
                Graphs
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav col-lg-1.5">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            {/* <li className="nav-item dropdown mr-sm-2">
              <a
                href="#"
                className="nav-link"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <ul className="dropdown-menu" style={styles.dropdown}>
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </ul>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
