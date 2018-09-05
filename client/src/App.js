import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './components/homepage';
import Table from './pages/table';

class App extends Component {
  render() {
    console.log('Users:', this.state.users);

    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/table" component={Table} />}
        </div>
      </Router>
    );
  }
}

export default App;
