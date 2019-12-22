import { actionTypes } from "./actionTypes";

const initialState = {
  user: null,
  adverts: []
};

export function reducer(state = initialState, action) {
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
