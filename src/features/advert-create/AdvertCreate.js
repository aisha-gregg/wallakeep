import React from "react";
import { AdvertForm } from "../adverts/AdvertForm";
import { AdvertRepository } from "../adverts/AdvertRepository";

export function AdvertCreate() {
  const advertRepository = new AdvertRepository();

  return (
    <AdvertForm
      onSubmit={advert => advertRepository.create(advert)}
      confirmText="Crear"
    ></AdvertForm>
  );
}
