import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Login } from "./features/login/Login";
import { Home } from "./features/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register } from "./features/register/Register";

export function App() {
  return (
    <Router>
      <div className={styles.app}>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
