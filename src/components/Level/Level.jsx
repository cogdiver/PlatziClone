import React, { Component } from "react";
import basico from "../../assets/static/Básico@2x.png";
import intermedio from "../../assets/static/Intermedio@2x.png";
import avanzado from "../../assets/static/Avanzado@2x.png";
import complementario from "../../assets/static/Complementario@2x.png";

class Level extends Component {
  render() {
    const { level, cursos } = this.props;
    const cursosHTML = cursos.map((curso) => <p key={curso}>{curso}</p>);

    return (
      <div className="level">
        {level === "basico" && <p>Primer contacto con el inglés</p>}
        {level === "intermedio" && <p>Práctica tus conocimientos</p>}
        {level === "avanzado" && <p>Alcanza un nivel profesional</p>}
        {level === "complementario" && <p>Conviértete en un experto</p>}

        <div>
          {level === "basico" && <img src={basico} alt={level} />}
          {level === "intermedio" && <img src={intermedio} alt={level} />}
          {level === "avanzado" && <img src={avanzado} alt={level} />}
          {level === "complementario" && (
            <img src={complementario} alt={level} />
          )}

          {level === "basico" ? <span>Básico</span> : <span>{level}</span>}
        </div>
        <div className="cursos">{cursosHTML}</div>
      </div>
    );
  }
}

export default Level;
