import React, { Component } from "react";
import photoUsuario from "../../assets/static/perfil.jpg";

export class AvanceUsuario extends Component {
  render() {
    const { cursos } = this.props;
    return (
      <div className="avance">
        <img src={photoUsuario} alt="" />
        <div className="barra">
          <div className="barraProgreso">
            <span>{cursos}</span>
            <span> cursos</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AvanceUsuario;
