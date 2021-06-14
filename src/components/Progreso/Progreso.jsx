import React from "react";
import { AvanceUsuario } from "../AvanceUsuario/AvanceUsuario";
import StyledProgreso from "./style";

const Progreso = () => (
  <StyledProgreso>
    <div className="encabezado">
      <span>
        Tú progreso vs.
        <span> tu Beneficiario</span>
      </span>
      <span>Expert+</span>
    </div>
    <AvanceUsuario cursos="120" />
    <AvanceUsuario cursos="60" />
  </StyledProgreso>
);

export default Progreso;
