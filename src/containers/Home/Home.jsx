import React from "react";
import ContinuarClases from "../components/ContinuarClases";
import Progreso from "../components/Progreso";
import Noticias from "../components/Noticias";
import Rutas from "../components/Rutas";
import Buscar from "../components/Buscar";
import "../assets/styles/_Home.scss";

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
