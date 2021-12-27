import React, { Component } from "react";
import Ruta from "../Ruta/Ruta";
import StyledRutas from "./style";

class Rutas extends Component {
  render() {
    return (
      <StyledRutas className="rutas">
        <Ruta />
        <Ruta />
        <Ruta />
        <Ruta />
        <Ruta />
        <Ruta />
      </StyledRutas>
    );
  }
}

export default Rutas;
