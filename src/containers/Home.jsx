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
      <div className='home'>
        <Rutas />
        <Buscador />
        <ContinuarClases />
        <Progreso />
        <Noticias />
      </div>
    </>
  );
};

export default Home;
