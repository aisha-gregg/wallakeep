import React, { useState, useEffect } from "react";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { useParams, useHistory } from "react-router-dom";
import { AdvertForm } from "../adverts/AdvertForm";
import { useDispatch } from "react-redux";
import { editAdvert } from "../store/actionCreators";

export function AdvertModify() {
  const [advert, setAdvert] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const advertRepository = new AdvertRepository();
    advertRepository.findOne(params.id).then(result => setAdvert(result));
  }, [params.id]);

  if (advert === null) {
    return <span>Cargando</span>;
  }

  return (
    <AdvertForm
      advert={advert}
      onSubmit={advert => handleSubmit(advert)}
      confirmText="Editar"
    ></AdvertForm>
  );

  async function handleSubmit(advert) {
    dispatch(editAdvert({ advert }));
    history.push("/home");
  }
}
