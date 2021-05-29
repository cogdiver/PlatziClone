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
        <Hero nameCurso='Curso de Adobe XD' descripcion='Aprende a usar Adobe XD para crear prototipos, diseños de interfaces y diagramas para web o móvil. Domina los paneles de diseño de Adobe XD para crear autoanimaciones, agregar estilos y elementos tipográficos. Optimiza tu trabajo aprovechando las funciones colaborativas de Adobe XD.' valoraciones='831' level='Básico' />
        <Contenido titulo='Temario y recursos del Curso de Adobe XD' />
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
