import React from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ name, onValueChange, options }) {
  return (
    <label className={styles.div}>
      {name}
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
    </label>
  );
}
