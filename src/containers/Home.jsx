import React from 'react';
import Header from '../components/Header';
import ContinuarClases from '../components/ContinuarClases';
import Progreso from '../components/Progreso';
import Noticias from '../components/Noticias';
import Rutas from '../components/menus/Rutas';
import Buscador from '../components/menus/Buscador';

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
