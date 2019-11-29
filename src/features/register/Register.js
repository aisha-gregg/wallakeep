import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import styles from "./Register.module.css";
import { Form } from "../../components/form/Form";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { TagRepository } from "../tags/TagRepository";

export function Register({ onRegister }) {
  const [name, setName] = useState("Aisha");
  const [lastName, setLastName] = useState("Gregg");
  const [password, setPassword] = useState("hello");
  const [tags, setTags] = useState([]);
  const history = useHistory();
  const tagRepository = new TagRepository();

  function saveUser() {
    const user = {
      name,
      lastName,
      password,
      tag: tags
    };
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/home");
  }

  useEffect(() => {
    tagRepository.findAll().then(tagResults => setTags(tagResults));
  }, []);

  const tagOptions = tags.map(tag => ({ name: tag.value, value: tag.value }));

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
        <Dropdown
          name="Tag"
          options={tagOptions}
          onValueChange={newValue => setTags(newValue)}
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
