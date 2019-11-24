import React, { useState, useEffect } from "react";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { useParams } from "react-router-dom";
import { AdvertForm } from "../adverts/AdvertForm";

export function AdvertModify() {
  const [advert, setAdvert] = useState(null);
  const advertRepository = new AdvertRepository();
  const params = useParams();

  useEffect(() => {
    advertRepository.findOne(params.id).then(result => setAdvert(result));
  }, []);

  if (advert === null) {
    return <span>Cargando</span>;
  }

  return (
    <AdvertForm
      advert={advert}
      onSubmit={advert => advertRepository.update(advert)}
      confirmText="Editar"
    ></AdvertForm>
  );
}
