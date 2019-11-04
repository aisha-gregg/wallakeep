import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Button } from "./Button";
import { Input } from "./Input";

export function App() {
  const [name, setName] = useState("Aisha");
  const [lastName, setLastName] = useState("Gregg");
  return (
    <div className={styles.App}>
      <header className={styles.button}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <div>
          <Input
            name="Nombre"
            value={name}
            onValueChange={newValue => setName(newValue)}
            className={styles.input}
          />
          <Input
            name="Apellido"
            value={lastName}
            onValueChange={newValue => setLastName(newValue)}
          />
          <Button onClick={() => alert(name + " " + lastName)}>
            <em>Login</em>
          </Button>
        </div>
      </header>
    </div>
  );
}
