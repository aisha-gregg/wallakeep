import { actionTypes } from "./actionTypes";
import { State } from "./State";

export function reducer(state = State.empty(), action) {
  switch (action.type) {
    case actionTypes.SAVE_USER:
      return { ...state, user: action.user };
    case actionTypes.SET_ADVERTS:
      return { ...state, adverts: action.adverts };
    case actionTypes.GOT_ADVERTS:
      return { ...state };
    case actionTypes.CREATED_ADVERT:
      return { ...state };
    case actionTypes.EDITED_ADVERT:
      return { ...state };
    default:
      return state;
  }
}
