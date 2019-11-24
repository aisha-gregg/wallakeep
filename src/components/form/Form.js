import React from "react";
import styles from "./Form.module.css";

export function Form({ children }) {
  return (
    <form
      className={styles.form}
      action="#"
      onSubmit={event => event.preventDefault()}
    >
      {children}
    </form>
  );
}
