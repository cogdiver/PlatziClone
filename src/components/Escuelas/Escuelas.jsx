import React, { Component } from "react";
import Escuela from "../Escuela/Escuela";
import "../../assets/styles/_Escuelas.scss";

class Escuelas extends Component {
  render() {
    return (
      <div className="recomendarEscuelas">
        <div className="barra" />
        <h3>Te recomendamos completar estos cursos de nuestras escuelas</h3>
        <div className="escuelas">
          <Escuela name="Product Design" />
          <Escuela name="Product Design" />
        </div>
      </div>
    );
  }
}

export default Escuelas;
