import React from "react";
import styles from "./Input.module.css";

export function Input({ name, onValueChange, value }) {
  return (
    <label className={styles.wrapper}>
      <p className={styles.label}>{name}</p>
      <input
        className={styles.input}
        value={value}
        onChange={event => onValueChange(event.target.value)}
      />
    </label>
  );
}
