import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageClase from "../../assets/static/clase.jpg";
import play from "../../assets/static/play.png";
import curso from "../../assets/static/curso.png";

class ContinuarClase extends Component {
  render() {
    return (
      <Link to="/rutas" className="ContinuarClase">
        <div className="previo">
          <img className="imagenClase" src={imageClase} alt="Clase" />
          <div className="icon">
            <img src={play} alt="" />
          </div>
        </div>
        <div className="descripcion">
          <span className="nombreClase">
            Nombre de la clase cuando es más largo
          </span>
          <div className="nombreCurso">
            <img src={curso} alt="" />
            <span>Nombre del curso cuando es más largo</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default ContinuarClase;
