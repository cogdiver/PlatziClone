import React, { Component } from "react";
import StyledEstadisticas from "./style";

class Estadisticas extends Component {
  render() {
    const estadisticas = [
      "70% de nuestros estudiantes duplican sus ingresos después de un año en Platzi.",
      "20% de nuestros estudiantes crean su propia empresa de tecnología.",
      "20% de nuestros estudiantes crean su propia empresa de tecnología.",
    ];

    const estadisticasHTML = estadisticas.map((e) => (
      <div className="dato">
        <div className="bolita" />
        <p>{e}</p>
      </div>
    ));
    return <StyledEstadisticas>{estadisticasHTML}</StyledEstadisticas>;
  }
}

export default Estadisticas;
