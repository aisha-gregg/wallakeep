import React, { useState } from "react";
import { InputText } from "../input-text/InputText";
import { Button } from "../button/Button";
import { InputNumber } from "../input-number/InputNumber";
import { RadioButton } from "../radio-button/RadioButton";

export function Filter({ onApply }) {
  const [articleName, setArticleName] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [tag, setTag] = useState(undefined);
  const [type, setType] = useState(undefined);

  return (
    <div>
      <InputText
        value={articleName}
        onValueChange={value => setArticleName(value)}
      ></InputText>
      <InputNumber
        value={minPrice}
        onValueChange={value => setMinPrice(value)}
      ></InputNumber>
      <InputNumber
        value={maxPrice}
        onValueChange={value => setMaxPrice(value)}
      ></InputNumber>

      <InputText value={tag} onValueChange={value => setTag(value)}></InputText>

      <RadioButton
        options={[
          { value: "buy", name: "Comprar" },
          { value: "sell", name: "Vender" }
        ]}
        value={type}
        onValueChange={value => setType(value)}
      ></RadioButton>

      <Button
        onClick={() => onApply({ articleName, maxPrice, minPrice, tag, type })}
      >
        Aplicar
      </Button>
    </div>
  );
}
