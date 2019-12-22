import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import thunk from "redux-thunk";
import { getAdverts } from "./actionCreators";
import { State } from "./State";

const user = JSON.parse(localStorage.getItem("user"));

export const store = createStore(
  reducer,
  State.preloaded({ user }),
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getAdverts());
