import React from "react";
import { AdvertForm } from "../adverts/AdvertForm";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { useHistory } from "react-router-dom";

export function AdvertCreate() {
  const advertRepository = new AdvertRepository();
  const history = useHistory();
  return (
    <AdvertForm
      onSubmit={advert => handleSubmit(advert)}
      confirmText="Crear"
    ></AdvertForm>
  );

  async function handleSubmit(advert) {
    try {
      await advertRepository.create(advert);
      history.push("/home");
    } catch {}
  }
}
