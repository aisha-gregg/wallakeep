import React from "react";
import styles from "./Dropdown.module.css";
import { Input } from "../input/Input";

export function Dropdown({ name, onValueChange, options, selected }) {
  return (
    <Input name={name}>
      <select
        multiple={true}
        value={selected}
        name={name}
        className={styles.dropdown}
        onChange={event =>
          onValueChange(
            [...event.target.options]
              .filter(option => option.selected)
              .map(option => option.value)
          )
        }
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
