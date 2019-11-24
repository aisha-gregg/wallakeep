import React, { useState } from "react";
import { Login } from "./features/login/Login";
import { Home } from "./features/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Register } from "./features/register/Register";
import { Page } from "./components/page/Page";
import { LoginContext } from "./features/login/LoginContext";

export function App() {
  const isUserLoggedIn = Boolean(localStorage.getItem("isUserLoggedIn"));
  const [state, setState] = useState({ isUserLoggedIn });

  return (
    <LoginContext.Provider value={state}>
      <Router>
        {!state.isUserLoggedIn ? (
          <Redirect to="/login"></Redirect>
        ) : (
          <Redirect to="/home"></Redirect>
        )}
        <Switch>
          <Route path="/login">
            <Page>
              <Login isUserLoggedIn={state.isUserLoggedIn} onLogin={onLogin} />
            </Page>
          </Route>
          <Route path="/register">
            <Page>
              <Register />
            </Page>
          </Route>
          <Route path="/">
            <Page>
              <Home />
            </Page>
          </Route>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );

  function onLogin() {
    setState({ isUserLoggedIn: true });
    localStorage.setItem("isUserLoggedIn", true);
  }
}
