import React from "react";
import styles from "./AdvertExtract.module.css";
import { Tags } from "../../components/TagStyle/Tags";

export function AdvertExtract({ advert, onAdvertClick }) {
  return (
    <article className={styles.advert} onClick={onAdvertClick}>
      <h2 className={styles["item-name"]}>{advert.name}</h2>
      <p>{advert.description}</p>
      <img alt="advert" src={advert.image} />
      <span>{advert.price}€</span>
      <div className={styles.buttons}>
        {advert.tags.map(tag => (
          <Tags key={tag}>{tag}</Tags>
        ))}
      </div>
      <span>{advert.type.toUpperCase()}</span>
    </article>
  );
}
