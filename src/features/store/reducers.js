import { actionTypes } from "./actionTypes";

const initialState = {
  user: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
