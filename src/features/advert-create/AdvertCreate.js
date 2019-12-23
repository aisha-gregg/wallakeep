import React from "react";
import { AdvertForm } from "../adverts/AdvertForm";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAdvert } from "../store/actionCreators";

export function AdvertCreate() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <AdvertForm
      onSubmit={advert => handleSubmit(advert)}
      confirmText="Crear"
    ></AdvertForm>
  );

  async function handleSubmit(advert) {
    try {
      dispatch(createAdvert({ advert }));
      history.push("/home");
    } catch {}
  }
}
