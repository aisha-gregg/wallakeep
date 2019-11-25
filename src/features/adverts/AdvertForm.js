import React, { useState } from "react";
import { Form } from "../../components/form/Form";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Advert } from "../adverts/Advert";

AdvertForm.defaultProps = {
  advert: {
    id: "",
    name: "",
    description: ""
  }
};

export function AdvertForm({ onSubmit, advert, confirmText }) {
  const [name, setName] = useState(advert.name);
  const [description, setDescription] = useState(advert.description);
  const [image, setImage] = useState(advert.image);
  const [price, setPrice] = useState(advert.price);
  const [tags, setTags] = useState(advert.tags);

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
      <Input
        name="Imagen"
        value={image}
        onValueChange={newValue => setImage(newValue)}
      ></Input>
      <Input
        name="Precio"
        value={price}
        onValueChange={newValue => setPrice(newValue)}
      ></Input>
      <Input
        name="Tags"
        value={tags}
        onValueChange={newValue => setTags(newValue)}
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
