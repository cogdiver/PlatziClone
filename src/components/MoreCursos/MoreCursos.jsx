import React, { Component } from "react";
import imgCurso from "../../assets/static/curso.png";
import "../../assets/styles/_MoreCursos.scss";

class MoreCursos extends Component {
  render() {
    const { cursos } = this.props;
    const cursosHTML = cursos.map((curso) => (
      <div className="curso">
        <img src={imgCurso} alt="" />
        <p>{curso}</p>
      </div>
    ));
    return (
      <div className="MoreCursos">
        <h4>Nuestros mejores estudiantes también cursaron</h4>
        <div className="cursos">{cursosHTML}</div>
      </div>
    );
  }
}

export default MoreCursos;
