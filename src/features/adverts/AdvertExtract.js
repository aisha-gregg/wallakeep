import React from "react";
import styles from "./AdvertExtract.module.css";

export function AdvertExtract({ advert, onAdvertClick }) {
  return (
    <article className={styles.advert} onClick={onAdvertClick}>
      <h2>{advert.name}</h2>
      <p>{advert.description}</p>
      <span>{advert.price}€</span>
    </article>
  );
}
