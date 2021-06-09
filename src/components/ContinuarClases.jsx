import React, { Component } from "react";
import ContinuarClase from "./ContinuarClase";
import "../assets/styles/_Continuar_clases.scss";

class ContinuarClases extends Component {
  render() {
    return (
      <div className="ContinuarViendo">
        <p className="titlleContinuar">Continuar Aprendiendo</p>
        <div className="clases">
          <ContinuarClase />
          <ContinuarClase />
        </div>
      </div>
    );
  }
}

export default ContinuarClases;
