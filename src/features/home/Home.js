import React, { useState, useEffect } from "react";
import { Button } from "../../components/button/Button";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { AdvertExtract } from "../adverts/AdvertExtract";
import styles from "./Home.module.css";

export function Home({ onLogout }) {
  const [adverts, setAdverts] = useState([]);

  const advertRepository = new AdvertRepository();

  useEffect(() => {
    advertRepository.findAll().then(results => setAdverts(results));
  }, []);

  return (
    <div>
      <section className={styles.adverts}>
        {adverts.map(advert => (
          <AdvertExtract advert={advert}></AdvertExtract>
        ))}
      </section>
      <Button onClick={() => onLogout()}>Cerrar sesión</Button>
    </div>
  );
}
