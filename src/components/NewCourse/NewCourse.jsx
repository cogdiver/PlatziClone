import React, { Component } from "react";
import { Link } from "react-router-dom";
import Agregar from "../svg/Agregar";
import imgCurso from "../../assets/static/curso.png";
import StyledCourse from "./style";

class NewCourse extends Component {
  render() {
    const { profesor, curso, color } = this.props;
    return (
      <Link to="/" className="new">
        <StyledCourse>
          <img src={imgCurso} alt="" />
          <div className="descripcion">
            <span>{curso}</span>
            <div>
              <span>
                <span>Profesor: </span>
                <span>{profesor}</span>
                <span className={color}>Nuevo</span>
              </span>
            </div>
          </div>
          <Agregar />
        </StyledCourse>
      </Link>
    );
  }
}

export default NewCourse;
