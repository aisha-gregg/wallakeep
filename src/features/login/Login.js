import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";

export function Login({}) {
  const [name, setName] = useState("Aisha");
  const [lastName, setLastName] = useState("Gregg");
  return (
    <div>
      <Input
        name="Nombre"
        value={name}
        onValueChange={newValue => setName(newValue)}
      />
      <Input
        name="Apellido"
        value={lastName}
        onValueChange={newValue => setLastName(newValue)}
      />
      <br />
      <br />
      <Button onClick={() => alert(name + " " + lastName)}>
        <em>Login</em>
      </Button>
      <p>Eres nuevo en Wallakeep?</p>
      <Link to="/register">Registrate aqui</Link>
    </div>
  );
}
