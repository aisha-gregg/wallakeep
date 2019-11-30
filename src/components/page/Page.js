import React from "react";
import styles from "./Page.module.css";
import { Header } from "../header/Header";

export function Page({ children }) {
  return (
    <div className={styles.page}>
      <Header></Header>
      {children}
    </div>
  );
}
