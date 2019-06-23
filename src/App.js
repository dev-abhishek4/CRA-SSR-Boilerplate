import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

import logo from './logo.svg';
import './App.scss';
import Routes from './routes';

const App = props => {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      <div className="route-contents">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/test-saga">Test Saga</Link>
          {props.isAuthenticated
            ? <Link to="/logout">Logout</Link>
            : <Link to="/login">Login</Link>
          }
          <Link to="/page-not-found">Page not found</Link>
        </div>
        <Routes />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
