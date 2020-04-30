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
                <Link className="protected" to="/user-profile">
                  Account
                </Link>
              </li>
            </ul>
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route exact path="/" component={Login} />
              <PrivateRoute exact path="/products-page" />
              <PrivateRoute path="/user-profile" component={Profile} />
            </Switch>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;

// woo joo noo x
// donald trump x
// jojo jaja
// ricardo / john
