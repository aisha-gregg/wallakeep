import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { AdvertRepository } from "../adverts/AdvertRepository";
import { AdvertExtract } from "../adverts/AdvertExtract";
import styles from "./Home.module.css";
import { Filter } from "../../components/filters/Filter";

export function Home({ onLogout }) {
  const [adverts, setAdverts] = useState([]);
  const history = useHistory();

  const [filters, setFilters] = useState({});

  const advertRepository = new AdvertRepository();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    advertRepository.findAll(filters).then(results => setAdverts(results));
  }, [filters]);

  return (
    <div>
      <div className={styles.align}>
        <Button onClick={() => history.push("/advert-create")}>
          Crear anuncio
        </Button>
        <Button onClick={() => onLogout()}>Cerrar sesión</Button>
        <Button onClick={() => setDisplay(!display)}>Filtrar</Button>
      </div>
      <Filter
        className={
          styles.filters + " " + (display ? styles["is-displayed"] : "")
        }
        onApply={filters => setFilters(filters)}
      ></Filter>

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
    </div>
  );
}
