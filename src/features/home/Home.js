import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { AdvertExtract } from "../adverts/AdvertExtract";
import styles from "./Home.module.css";

export function Home({ onLogout }) {
  const [adverts, setAdverts] = useState([]);
  const history = useHistory();

  const advertRepository = new AdvertRepository();

  useEffect(() => {
    advertRepository.findAll().then(results => setAdverts(results));
  }, []);

  return (
    <div>
      <Button onClick={() => history.push("/advert-create")}>
        Crear anuncio
      </Button>
      <article className={styles.article}>
        <section className={styles.adverts}>
          {adverts.map(advert => (
            <AdvertExtract
              key={advert.id}
              onAdvertClick={() => history.push(`/adverts/${advert.id}`)}
              advert={advert}
            ></AdvertExtract>
          ))}
        </section>
      </article>
      <Button onClick={() => onLogout()}>Cerrar sesión</Button>
    </div>
  );
}
