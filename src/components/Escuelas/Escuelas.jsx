import React, { Component } from "react";
import Escuela from "../Escuela/Escuela";
import StyledEscuelas from "./style";

class Escuelas extends Component {
  render() {
    return (
      <StyledEscuelas>
        <div className="barra" />
        <h3>Te recomendamos completar estos cursos de nuestras escuelas</h3>
        <div className="escuelas">
          <Escuela name="Product Design" />
          <Escuela name="Product Design" />
        </div>
      </StyledEscuelas>
    );
  }
}

export default Escuelas;
