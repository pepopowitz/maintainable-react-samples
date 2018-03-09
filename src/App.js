import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Home from "./home";
import Ducks from "./ducks";
import PragmaticState from "./pragmatic-state";
import Prettier from "./prettier";
import Procrastination from "./procrastination";
import SuitcaseLifehack from "./suitcase-lifehack";
import UseThePlatform from "./use-the-platform";

const Nav = function() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ducks">Ducks</Link>
          </li>
          <li>
            <Link to="/pragmatic-state">Pragmatic State</Link>
          </li>
          <li>
            <Link to="/prettier">Prettier</Link>
          </li>
          <li>
            <Link to="/procrastination">Procrastination</Link>
          </li>
          <li>
            <Link to="/suitcase-lifehack">Suitcase Lifehack</Link>
          </li>
          <li>
            <Link to="/use-the-platform">Use The Platform</Link>
          </li>
        </ul>
      </div>
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />

            <p className="App-intro">
              <Route exact path="/" component={Home} />
              <Route exact path="/ducks" component={Ducks} />
              <Route exact path="/pragmatic-state" component={PragmaticState} />
              <Route exact path="/prettier" component={Prettier} />
              <Route
                exact
                path="/procrastination"
                component={Procrastination}
              />
              <Route
                exact
                path="/suitcase-lifehack"
                component={SuitcaseLifehack}
              />
              <Route
                exact
                path="/use-the-platform"
                component={UseThePlatform}
              />
            </p>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
