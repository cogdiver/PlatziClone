import React from 'react';
import Header from '../components/Header';
import ContinuarClases from '../components/ContinuarClases';
import Progreso from '../components/Progreso';
import Noticias from '../components/Noticias';
import Rutas from '../components/Rutas';
import Buscador from '../components/Buscador';

const Home = () => {
  return (
    <>
      <Header />
      <Rutas />
      <Buscador />
      <ContinuarClases />
      <Progreso />
      <Noticias />
    </>
  );
};

export default Home;
