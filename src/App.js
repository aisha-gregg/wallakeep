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
import { AdvertDetail } from "./features/advert-detail/AdvertDetail";
import { AdvertCreate } from "./features/advert-create/AdvertCreate";
import { AdvertRepository } from "./features/adverts/AdvertRepository";

export function App() {
  const isUserLoggedIn = Boolean(localStorage.getItem("isUserLoggedIn"));
  const [state, setState] = useState({ isUserLoggedIn });
  const advertRepository = new AdvertRepository();

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
              <Login onLogin={onLogin} />
            </Page>
          </Route>
          <Route path="/register">
            <Page>
              <Register onRegister={onLogin} />
            </Page>
          </Route>
          <Route path="/adverts/:id">
            <Page>
              <AdvertDetail />
            </Page>
          </Route>
          <Route path="/advert-create">
            <Page>
              <AdvertCreate onSubmit={onCreate} />
            </Page>
          </Route>
          <Route path="/">
            <Page>
              <Home onLogout={onLogout} />
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

  function onLogout() {
    setState({ isUserLoggedIn: false });
    localStorage.setItem("isUserLoggedIn", false);
  }

  function onCreate(advert) {
    advertRepository.create(advert);
  }
}
