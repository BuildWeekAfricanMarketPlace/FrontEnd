import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link className="login" to="/">
                  Login
                </Link>
              </li>
              <li>
                <Link className="protected" to="/products-page">
                  Products
                </Link>
              </li>
              <li>
                <Link className="protected" to="/profile:id">
                  Account
                </Link>
              </li>
            </ul>
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/products-page" />
              <PrivateRoute path="/user-profile:id" component={Profile} />
            </Switch>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;

// woo joo noo
// donald trump
// jotaro-name jojo-user jaja-pass
