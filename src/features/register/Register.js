import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import styles from "./Register.module.css";
import { Form } from "../../components/form/Form";

export function Register({ onRegister }) {
  const [name, setName] = useState("Aisha");
  const [lastName, setLastName] = useState("Gregg");
  const [password, setPassword] = useState("hello");
  const [tag, setTag] = useState("");
  const history = useHistory();

  function saveUser() {
    const user = {
      name,
      lastName,
      password,
      tag
    };

    localStorage.setItem("user", JSON.stringify(user));
    history.push("/home");
  }

  return (
    <div className={styles.wrapper}>
      <Form>
        <Input
          name="Escribe un nombre"
          value={name}
          onValueChange={newValue => setName(newValue)}
        />
        <Input
          name="Escribe un apellido"
          value={lastName}
          onValueChange={newValue => setLastName(newValue)}
        />
        <Input
          name="Escribe una contraseña"
          value={password}
          onValueChange={newValue => setPassword(newValue)}
        />
        <Input
          name="Tag"
          value={tag}
          onValueChange={newValue => setTag(newValue)}
        />
        <Button
          onClick={() => {
            saveUser();
            onRegister();
          }}
        >
          Registrarse
        </Button>
      </Form>
    </div>
  );
}
