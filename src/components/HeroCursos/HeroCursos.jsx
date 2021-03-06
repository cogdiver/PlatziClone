import React, { Component } from "react";
import curso from "../../assets/static/curso.png";
import Estrella from "../svg/Estrella";
import Level from "../svg/Level";
import Agregar from "../svg/Agregar";
import StyledHero from "./style";

class HeroCursos extends Component {
  render() {
    const { nameCurso, descripcion, valoraciones, level } = this.props;

    return (
      <StyledHero>
        <img src={curso} alt="" />
        <div className="detalles">
          <h2 className="nombre">{nameCurso}</h2>
          <div className="valoracion">
            <div className="estrellas">
              <Estrella />
              <Estrella />
              <Estrella />
              <Estrella />
              <Estrella />
            </div>
            <span className="valoraciones">{valoraciones}</span>
            <div className="level">
              <Level />
              <span>{level}</span>
            </div>
          </div>
        </div>
        <p className="descripcion">{descripcion}</p>
        <div className="cta">
          <input type="button" value="continuar aprendiendo" />
          <Agregar />
        </div>
      </StyledHero>
    );
  }
}

export default HeroCursos;
