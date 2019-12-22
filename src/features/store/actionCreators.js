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

export function createAdvert({ advert }) {
  return async () => {
    const advertRepository = new AdvertRepository();
    return advertRepository.create(advert);
  };
}

//export function editAdvert({ advert }) {
//return {
// type: actionTypes.EDIT_ADVERT,
//advert
//};
//}

export function getAdverts(filters) {
  return async dispatch => {
    const advertRepository = new AdvertRepository();
    const adverts = await advertRepository.findAll(filters);
    dispatch(setAdverts({ adverts }));
  };
}
