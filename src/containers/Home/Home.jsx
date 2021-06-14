import React from "react";
import ContinuarClases from "../../components/ContinuarClases/ContinuarClases";
import Progreso from "../../components/Progreso/Progreso";
import Noticias from "../../components/Noticias/Noticias";
import Rutas from "../../components/Rutas/Rutas";
import Buscar from "../../components/Buscar/Buscar";
import StyledHome from "./style";

const Home = () => {
  return (
    <StyledHome className="scroll">
      <Rutas />
      <Buscar />
      <ContinuarClases />
      <Progreso />
      <Noticias />
    </StyledHome>
  );
};

export default Home;
