import React, { useState } from "react";
import { Form } from "../../components/form/Form";
import { Button } from "../../components/button/Button";
import { Advert } from "../adverts/Advert";
import { InputText } from "../../components/input-text/InputText";

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
      <InputText
        name="Nombre"
        value={name}
        onValueChange={newValue => setName(newValue)}
      ></InputText>
      <InputText
        name="Descripción"
        value={description}
        onValueChange={newValue => setDescription(newValue)}
      ></InputText>
      <InputText
        name="Imagen"
        value={image}
        onValueChange={newValue => setImage(newValue)}
      ></InputText>
      <InputText
        name="Precio"
        value={price}
        onValueChange={newValue => setPrice(newValue)}
      ></InputText>
      <InputText
        name="Tags"
        value={tags}
        onValueChange={newValue => setTags(newValue)}
      ></InputText>

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
