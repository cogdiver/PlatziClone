import React from "react";
import ContinuarClases from "../../components/ContinuarClases/ContinuarClases";
import Progreso from "../../components/Progreso/Progreso";
import Noticias from "../../components/Noticias/Noticias";
import Rutas from "../../components/Rutas/Rutas";
import Buscar from "../../components/Buscar/Buscar";
import "../../assets/styles/_Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Rutas />
      <Buscar />
      <ContinuarClases />
      <Progreso />
      <Noticias />
    </div>
  );
};

export default Home;
