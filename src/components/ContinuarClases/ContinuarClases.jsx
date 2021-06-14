import React, { Component } from "react";
import ContinuarClase from "../ContinuarClase/ContinuarClase";
import StyledContinuar from "./style";

class ContinuarClases extends Component {
  render() {
    return (
      <StyledContinuar>
        <p className="titlleContinuar">Continuar Aprendiendo</p>
        <div className="clases">
          <ContinuarClase />
          <ContinuarClase />
        </div>
      </StyledContinuar>
    );
  }
}

export default ContinuarClases;
