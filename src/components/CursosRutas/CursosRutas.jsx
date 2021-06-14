import React, { Component } from "react";
import Level from "../Level/Level";
//import basico from "../assets/static/Básico.png";
//import intermedio from "../assets/static/Básico.png";
//import avanzado from "../assets/static/Básico.png";
//import complementario from "../assets/static/Básico.png";

class CursosRutas extends Component {
  render() {
    const { levels } = this.props;
    const CursosHTML = levels.map((l) => (
      <Level key={l.level} level={l.level} cursos={l.cursos} />
    ));

    return <div className="cursos">{CursosHTML}</div>;
  }
}

export default CursosRutas;
