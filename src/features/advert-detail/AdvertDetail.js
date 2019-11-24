import React, { useState, useEffect } from "react";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { useParams, useHistory } from "react-router-dom";
import styles from "./AdvertDetail.module.css";
import { Button } from "../../components/button/Button";

export function AdvertDetail() {
  const [advert, setAdvert] = useState(null);
  const advertRepository = new AdvertRepository();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    advertRepository.findOne(params.id).then(result => setAdvert(result));
  }, []);

  if (advert === null) {
    return <span>Cargando</span>;
  }

  return (
    <div>
      <Button onClick={() => history.push(`/advert-modify/${advert.id}`)}>
        Editar
      </Button>
      <article className={styles.advert}>
        <h2>{advert.name}</h2>
        <p>{advert.description}</p>
      </article>
    </div>
  );
}
