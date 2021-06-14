import React, { Component } from "react";
import Encabezado from "../Encabezado/Encabezado";
import StyledComunidad from "./style";

class Comunidad extends Component {
  render() {
    return (
      <StyledComunidad>
        <div className="barra" />
        <h3>La Comunidad es nuestro superpoder</h3>
        <p>
          Conoce algunos de los proyectos realizados por nuestros estudiantes en
          este curso y sus aportes más destacados
        </p>
        <Encabezado encabezados={["aportes", "blogpost", "proyectos"]} />
        <div className="contenido" />
      </StyledComunidad>
    );
  }
}

export default Comunidad;
