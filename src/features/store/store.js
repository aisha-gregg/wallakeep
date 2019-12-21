import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { reducer } from "./reducers";

const composedEnhancers = composeWithDevTools();
const user = JSON.parse(localStorage.getItem("user"));
export const store = createStore(reducer, { user }, composedEnhancers);
