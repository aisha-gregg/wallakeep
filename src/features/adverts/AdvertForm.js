import React, { useState, useEffect } from "react";
import { Form } from "../../components/form/Form";
import { Button } from "../../components/button/Button";
import { Advert } from "../adverts/Advert";
import { InputText } from "../../components/input-text/InputText";
import { Dropdown } from "../../components/dropdown/Dropdown";
import { TagRepository } from "../tags/TagRepository";
import { InputNumber } from "../../components/input-number/InputNumber";
import { RadioButton } from "../../components/radio-button/RadioButton";

AdvertForm.defaultProps = {
  advert: {
    id: "",
    name: "",
    image: "",
    price: 0,
    description: "",
    tags: [],
    type: "sell"
  }
};

function buildTags(tags) {
  return tags.map(tag => ({ name: tag, value: tag }));
}

function buildTagOptions(tags) {
  return tags.map(tag => ({ name: tag.value, value: tag.value }));
}

export function AdvertForm({ onSubmit, advert, confirmText }) {
  const [name, setName] = useState(advert.name);
  const [description, setDescription] = useState(advert.description);
  const [image, setImage] = useState(advert.image);
  const [price, setPrice] = useState(advert.price);
  const [selectedTags, setSelectedTags] = useState(buildTags(advert.tags));
  const [tags, setTags] = useState([]);
  const [type, setSelectedType] = useState(advert.type);

  useEffect(() => {
    const tagRepository = new TagRepository();
    tagRepository.findAll().then(tagResults => setTags(tagResults));
  }, []);

  const typeOptions = [
    { name: "Comprar", value: "buy" },
    { name: "Vender", value: "sell" }
  ];

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
      <InputNumber
        name="Precio"
        value={price}
        onValueChange={newValue => setPrice(newValue)}
      ></InputNumber>
      <Dropdown
        name="Tag"
        options={buildTagOptions(tags)}
        selected={selectedTags}
        onValueChange={newValue => setSelectedTags(newValue)}
      ></Dropdown>
      <RadioButton
        name="type"
        options={typeOptions}
        value={type}
        onValueChange={newValue => setSelectedType(newValue)}
      ></RadioButton>

      <Button
        onClick={() =>
          onSubmit(
            new Advert({
              id: advert.id,
              name,
              description,
              price,
              tags: selectedTags,
              image,
              type
            })
          )
        }
      >
        <strong>{confirmText}</strong>
      </Button>
    </Form>
  );
}
