import React from "react";
import { Login } from "./features/login/Login";
import { Home } from "./features/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register } from "./features/register/Register";
import { Page } from "./components/page/Page";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Page>
            <Login />
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
  );
}
