import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./features/store/store";
import { saveUser } from "./features/store/actionCreators";

store.subscribe(() => console.log(store.getState()));

let count = 0;
const id = setInterval(() => {
  count++;
  store.dispatch(
    saveUser({
      name: Math.random() > 0.5 ? "César" : "Aisha",
      lastname: "Alberca",
      password: "sasada",
      tags: []
    })
  );

  if (count === 10) {
    clearInterval(id);
  }
}, 1000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
