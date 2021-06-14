import React, { Component } from "react";
import StyledDocente from "./style";

class Docente extends Component {
  render() {
    return (
      <StyledDocente>
        <img src="" alt="" />
        <div className="barra" />
        <h3>Conoce quién enseña el Curso de Adobe XD</h3>
        <div className="descripcion">
          <div className="name">Carlos Jiménez</div>
          <div className="cargo">Motion expert and Designer en Platzi</div>
        </div>
        <div className="detalles">Product Designer at Platzi</div>
        <input type="button" value="cursos de carlos" />
      </StyledDocente>
    );
  }
}

export default Docente;
