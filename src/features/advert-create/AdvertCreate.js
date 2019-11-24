import React, { useState } from "react";
import { Form } from "../../components/form/Form";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Advert } from "../adverts/Advert";

export function AdvertCreate({ onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Form>
      <Input
        name="Nombre"
        value={name}
        onValueChange={newValue => setName(newValue)}
      ></Input>
      <Input
        name="Descripción"
        value={description}
        onValueChange={newValue => setDescription(newValue)}
      ></Input>
      <Button onClick={() => onSubmit(new Advert({ name, description }))}>
        <strong>Crear</strong>
      </Button>
    </Form>
  );
}
