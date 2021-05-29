import React from 'react';
import Header from '../components/Header';
import ContinuarClases from '../components/ContinuarClases';
import Progreso from '../components/Progreso';
import Noticias from '../components/Noticias';
import Rutas from '../components/Rutas';
import Buscar from '../components/Buscar';
import '../assets/styles/_Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Rutas />
      <Buscar />
      <ContinuarClases />
      <Progreso />
      <Noticias />
    </div>
  );
};

export default Home;
