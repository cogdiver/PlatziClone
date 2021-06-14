import React, { Component } from "react";
import escuela from "../../assets/static/escuela.jpg";
import imgCurso from "../../assets/static/curso.png";

class Escuela extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="escuela">
        <div className="top">
          <img src={escuela} alt="" />
          <span>
            Escuela de
            <span>{name}</span>
          </span>
        </div>
        <div className="cursos">
          <div className="union" />
          <div className="curso">
            <img src={imgCurso} alt="" />
            <p>Curso de Sketch</p>
          </div>
          <div className="curso">
            <img src={imgCurso} alt="" />
            <div>
              <span>Tú estás aquí</span>
              <p>Curso de Sketch</p>
            </div>
          </div>
          <div className="curso">
            <img src={imgCurso} alt="" />
            <p>Curso de Sketch</p>
          </div>
        </div>
        <input
          type="button"
          value="conocer toda la escuela"
          className="boton-verde-grande"
        />
      </div>
    );
  }
}

export default Escuela;
