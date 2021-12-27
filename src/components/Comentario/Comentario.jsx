import React, { Component } from "react";

class Comentario extends Component {
  render() {
    const { comentario } = this.props;
    return (
      <div className="comentario">
        <img src="" alt="" />
        <div className="name" />
        <div className="user" />
        <p className="description">{comentario}</p>
      </div>
    );
  }
}

export default Comentario;
