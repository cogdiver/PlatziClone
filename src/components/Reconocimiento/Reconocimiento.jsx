import React, { Component } from "react";
import StyledReconocimiento from "./style";

class Reconocimiento extends Component {
  render() {
    return (
      <StyledReconocimiento>
        <img src="" alt="" className="diploma" />
        <div className="barra" />
        <h3>¡Obtén reconocimiento por tu trabajo!</h3>
        <p>
          Comparte tus logros con tu familia, amigos, empleadores y la
          comunidad.
          <br />
          <br />
          Apenas termines el curso tendrás acceso al diploma digital y cuando
          finalices la carrera te enviaremos el diploma en papel a tu casa.
        </p>
        <input type="button" value="continuar aprendiendo" />
      </StyledReconocimiento>
    );
  }
}

export default Reconocimiento;
