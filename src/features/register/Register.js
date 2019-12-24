import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InputText } from "../../components/input-text/InputText";
import { Button } from "../../components/button/Button";
import styles from "./Register.module.css";
import { Form } from "../../components/form/Form";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { TagRepository } from "../tags/TagRepository";
import { useDispatch } from "react-redux";
import { saveUser as saveUserActionCreator } from "../store/actionCreators";

export function Register({ onRegister }) {
  const [name, setName] = useState("Aisha");
  const [lastName, setLastName] = useState("Gregg");
  const [password, setPassword] = useState("hello");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  function saveUser() {
    const user = {
      name,
      lastName,
      password,
      tags: selectedTags
    };
    dispatch(
      saveUserActionCreator({
        name,
        lastname: lastName,
        password,
        tags: selectedTags
      })
    );
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/home");
  }

  useEffect(() => {
    const tagRepository = new TagRepository();
    tagRepository.findAll().then(tagResults => setTags(tagResults));
  }, []);

  const tagOptions = tags.map(tag => ({ name: tag.value, value: tag.value }));

  return (
    <div className={styles.wrapper}>
      <Form>
        <InputText
          name="Escribe un nombre"
          value={name}
          onValueChange={newValue => setName(newValue)}
        />
        <InputText
          name="Escribe un apellido"
          value={lastName}
          onValueChange={newValue => setLastName(newValue)}
        />
        <InputText
          name="Escribe una contraseña"
          value={password}
          onValueChange={newValue => setPassword(newValue)}
        />
        <Dropdown
          name="Tag"
          options={tagOptions}
          selected={selectedTags}
          onValueChange={newValue => {
            console.log({ newValue });
            setSelectedTags(newValue);
          }}
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
