import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./AdvertDetail.module.css";
import { Button } from "../../components/button/Button";
import { useSelector } from "react-redux";

export function AdvertDetail() {
  const params = useParams();
  const advert =
    useSelector(state =>
      state.adverts.find(advert => advert.id === params.id)
    ) || null;
  const history = useHistory();

  if (advert === null) {
    return <span>Cargando</span>;
  }

  return (
    <div className={styles.detail}>
      <Button onClick={() => history.push(`/advert-modify/${advert.id}`)}>
        Editar
      </Button>

      <article className={styles.advert}>
        <h2>{advert.name}</h2>
        <p>{advert.description}</p>
        <p>{advert.price}</p>
        <p>{advert.type}</p>
        {advert.tags.map(tag => (
          <Button key={tag}>{tag}</Button>
        ))}
      </article>
    </div>
  );
}
