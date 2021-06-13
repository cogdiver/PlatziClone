import React, { Component } from "react";
import Temario from "./Temario";
import Detalles from "./Detalles";
import Encabezado from "./Encabezado";
import "../assets/styles/_Contenido.scss";

class Contenido extends Component {
  render() {
    const { titulo } = this.props;
    return (
      <div className="temarioRecursos">
        <div className="barra" />
        <h3>{titulo}</h3>
        <Encabezado encabezados={["temario", "detalles"]} />
        <div className="contenido">
          <Temario />
          <Detalles />
        </div>
      </div>
    );
  }
}

export default Contenido;
