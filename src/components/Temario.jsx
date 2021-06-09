import React, { Component } from "react";
import Modulo from "./Modulo";

class Temario extends Component {
  render() {
    const modulos = [
      {
        titulo:
          "Conocer la importancia de utilizar una herramienta especializada en el diseño de interfaces",
        clases: ["clase1", "clase2"],
      },
      {
        titulo:
          "Conocer la importancia de utilizar una herramienta especializada en el diseño de interfaces2",
        clases: ["clase3", "clase4", "clase5"],
      },
    ];
    const modulosHTML = modulos.map((modulo) => (
      <Modulo titulo={modulo.titulo} clases={modulo.clases} />
    ));

    return (
      <div className="temario">
        <p className="nota"> Temario del Curso de Adobe XD</p>
        <div className="modulos">{modulosHTML}</div>
      </div>
    );
  }
}

export default Temario;
