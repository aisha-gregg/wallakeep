import React from "react";
import styles from "./Tags.module.css";

export function Tags({ children }) {
  return <span className={styles.tags}> {children}</span>;
}
