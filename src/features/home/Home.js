import React from "react";
import { Button } from "../../components/button/Button";

export function Home({ onLogout }) {
  return (
    <div>
      <Button onClick={() => onLogout()}>Cerrar sesión</Button>
    </div>
  );
}
