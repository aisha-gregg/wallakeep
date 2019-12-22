import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { AdvertExtract } from "../adverts/AdvertExtract";
import styles from "./Home.module.css";
import { Filter } from "../../components/filters/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../store/actionCreators";

export function Home({ onLogout }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const adverts = useSelector(state => state.adverts) || [];
  const [filters, setFilters] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (filters !== null) {
      dispatch(getAdverts(filters));
    }
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
