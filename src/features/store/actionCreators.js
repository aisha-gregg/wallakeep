import { actionTypes } from "./actionTypes";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { AdvertRepositoryFactory } from "../adverts/AdvertRepositoryFactory";

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

export function createdAdvert() {
  return {
    type: actionTypes.CREATED_ADVERT
  };
}

export function editedAdvert() {
  return {
    type: actionTypes.EDITED_ADVERT
  };
}

export function gotAdverts() {
  return {
    type: actionTypes.GOT_ADVERTS
  };
}

export function createAdvert({ advert }) {
  return async dispatch => {
    const advertRepository = AdvertRepositoryFactory.create();
    await advertRepository.create(advert);
    dispatch(getAdverts());
    dispatch(createdAdvert());
  };
}

export function editAdvert({ advert }) {
  return async dispatch => {
    const advertRepository = new AdvertRepository();
    await advertRepository.update(advert);
    dispatch(getAdverts());
    dispatch(editedAdvert());
  };
}

export function getAdverts(filters) {
  return async dispatch => {
    const advertRepository = new AdvertRepository();
    const adverts = await advertRepository.findAll(filters);
    dispatch(setAdverts({ adverts }));
    dispatch(gotAdverts());
  };
}
