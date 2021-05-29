import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/HeroCursos';
import Contenido from '../components/Contenido';
import Escuelas from '../components/Escuelas';
import Docente from '../components/Docente';
import Comentarios from '../components/Comentarios';
import Estadisticas from '../components/Estadisticas';
import Comunidad from '../components/Comunidad';
import MoreCursos from '../components/MoreCursos';
import Reconocimiento from '../components/Reconocimiento';
import Footer from '../components/Footer';

class Cursos extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Contenido />
        <Escuelas />
        <Docente />
        <Comentarios />
        <Estadisticas />
        <Comunidad />
        <MoreCursos />
        <Reconocimiento />
        <Footer />
      </>
    );
  }
}

export default Cursos;
