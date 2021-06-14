import React, { Component } from "react";
import Temario from "../Temario/Temario";
import Detalles from "../Detalles/Detalles";
import Encabezado from "../Encabezado/Encabezado";
import StyledContenido from "./style";

class Contenido extends Component {
  render() {
    const { titulo } = this.props;
    return (
      <StyledContenido>
        <div className="barra" />
        <h3>{titulo}</h3>
        <Encabezado encabezados={["temario", "detalles"]} />
        <div className="contenido">
          <Temario />
          <Detalles />
        </div>
      </StyledContenido>
    );
  }
}

export default Contenido;
