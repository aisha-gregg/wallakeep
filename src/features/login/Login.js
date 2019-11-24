import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { Form } from "../../components/form/Form";

export function Login({ onLogin }) {
  const [name, setName] = useState("Aisha");
  const [lastName, setLastName] = useState("Gregg");

  return (
    <div className={styles.wrapper}>
      <Form>
        <Input
          name="Nombre"
          value={name}
          onValueChange={newValue => setName(newValue)}
        />
        <Input
          name="Apellido"
          value={lastName}
          onValueChange={newValue => setLastName(newValue)}
        />
        <br />
        <br />
        <Button onClick={() => onLogin()}>
          <strong>Login</strong>
        </Button>
        <p>¿Eres nuevo en Wallakeep?</p>
        <Link to="/register" className={styles["link-colour"]}>
          Regístrate aquí
        </Link>
      </Form>
    </div>
  );
}
