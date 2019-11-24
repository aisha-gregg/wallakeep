import React, { useState } from "react";
import { Form } from "../../components/form/Form";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Advert } from "../adverts/Advert";

export function AdvertForm({ onSubmit, advert, confirmText }) {
  const [name, setName] = useState(advert.name);
  const [description, setDescription] = useState(advert.description);

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
      <Button
        onClick={() =>
          onSubmit(new Advert({ id: advert.id, name, description }))
        }
      >
        <strong>{confirmText}</strong>
      </Button>
    </Form>
  );
}

AdvertForm.defaultProps = {
  advert: {
    id: "",
    name: "",
    descrption: ""
  }
};
