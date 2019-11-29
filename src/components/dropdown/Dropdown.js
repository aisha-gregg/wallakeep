import React from "react";
import styles from "./Dropdown.module.css";
import { Input } from "../input/Input";

export function Dropdown({ name, onValueChange, options }) {
  return (
    <Input name={name}>
      <select
        name={name}
        className={styles.dropdown}
        onChange={event => onValueChange(event.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}{" "}
          </option>
        ))}
      </select>
    </Input>
  );
}
