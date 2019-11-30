import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Wallakeep </h1>
      <h4 className={styles.h4}>Cómpralo o Véndelo</h4>
    </div>
  );
}
