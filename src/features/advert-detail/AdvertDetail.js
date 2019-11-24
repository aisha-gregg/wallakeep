import React, { useState, useEffect } from "react";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { useParams } from "react-router-dom";
import styles from "./AdvertDetail.module.css";

export function AdvertDetail() {
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
    <article className={styles.advert}>
      <h2>{advert.name}</h2>
      <p>{advert.description}</p>
    </article>
  );
}
