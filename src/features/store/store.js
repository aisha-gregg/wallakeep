import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { reducer } from "./reducers";

const composedEnhancers = composeWithDevTools();
export const store = createStore(reducer, undefined, composedEnhancers);
