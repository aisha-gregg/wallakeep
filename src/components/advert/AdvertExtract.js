import React from "react";
import styles from "./AdvertExtract.module.css";

export function AdvertExtract({ children }) {
  return (
    <advertExtract className={styles.advertExtract}>{children}</advertExtract>
  );
}
