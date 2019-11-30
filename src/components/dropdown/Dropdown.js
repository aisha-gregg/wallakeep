import React from "react";
import styles from "./Dropdown.module.css";
import { Input } from "../input/Input";

export function Dropdown({ name, onValueChange, options, selected }) {
  return (
    <Input name={name}>
      <select
        multiple={true}
        value={selected.map(selectedOption => selectedOption.value)}
        name={name}
        className={styles.dropdown}
        onChange={event =>
          onValueChange(
            [...event.target.options]
              .filter(option => option.selected)
              .map(option => ({
                value: option.value,
                name: option.name
              }))
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

/**
 * options = [{ value: 'foo', name: 'Foo' }, { value: 'faz', name: 'Faz' }]
 * selected = [{ value: 'faz', name: 'Faz' }]
 */
