import React, { Component } from "react";
import StyledComentarios from "./style";
import Comentario from "../Comentario/Comentario";
//import "../../assets/styles/_Comentarios.scss";

class Comentarios extends Component {
  render() {
    const comentarios = [
      "comentario1",
      "comentario2",
      "comentario1",
      "comentario2",
    ];
    const comentariosHTML = comentarios.map((c) => (
      <Comentario comentario={c} />
    ));

    return (
      <StyledComentarios className="comentarios">
        {comentariosHTML}
      </StyledComentarios>
    );
  }
}

export default Comentarios;
