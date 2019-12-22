import { actionTypes } from "./actionTypes";
import { AdvertRepository } from "../adverts/AdvertRepository";

export function saveUser({ name, lastname, password, tags }) {
  return {
    type: actionTypes.SAVE_USER,
    user: {
      name,
      lastname,
      password,
      tags
    }
  };
}

export function setAdverts({ adverts }) {
  return {
    type: actionTypes.SET_ADVERTS,
    adverts
  };
}

export function getAdverts() {
  return async dispatch => {
    const advertRepository = new AdvertRepository();
    const adverts = await advertRepository.findAll();
    dispatch(setAdverts({ adverts }));
  };
}
