import React, { Component, Stylesheet } from "react";
import { Link } from "react-router-dom";

import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse navbar-light" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/table">
                Lifts Table
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                TBD
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav col-lg-1.5">
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
            {/* <li class="nav-item dropdown mr-sm-2">
              <a
                href="#"
                class="nav-link"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <ul class="dropdown-menu" style={styles.dropdown}>
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
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

const styles = {
  dropdown: {
    left: -125
  }
};

export default NavBar;
