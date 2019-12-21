import { actionTypes } from "./actionTypes";

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
