import React, { Component } from "react";
import Play from "./svg/Play";

class Modulo extends Component {
  render() {
    const { titulo, clases } = this.props;
    const clasesHTML = clases.map((c) => (
      <div key={c.nameClass} className="clase">
        <Play />
        <p>{c.nameClass}</p>
      </div>
    ));

    return (
      <div className="modulo">
        <h3>{titulo}</h3>
        <div className="clases">{clasesHTML}</div>
      </div>
    );
  }
}

export default Modulo;
