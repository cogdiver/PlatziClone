import React, { Component } from "react";
import Hero from "Components/HeroCursos";
import Contenido from "Components/Contenido";
import Escuelas from "Components/Escuelas";
import Docente from "Components/Docente";
import Comentarios from "Components/Comentarios";
import Estadisticas from "Components/Estadisticas";
import Comunidad from "Components/Comunidad";
import MoreCursos from "Components/MoreCursos";
import Reconocimiento from "Components/Reconocimiento";
import Footer from "Components/Footer";

class Cursos extends Component {
  render() {
    return (
      <>
        <Hero
          nameCurso="Curso de Adobe XD"
          descripcion="Aprende a usar Adobe XD para crear prototipos, diseños de interfaces y diagramas para web o móvil. Domina los paneles de diseño de Adobe XD para crear autoanimaciones, agregar estilos y elementos tipográficos. Optimiza tu trabajo aprovechando las funciones colaborativas de Adobe XD."
          valoraciones="831"
          level="Básico"
        />
        <Contenido titulo="Temario y recursos del Curso de Adobe XD" />
        <Escuelas />
        <Docente />
        <Comentarios />
        <Estadisticas />
        <Comunidad />
        <MoreCursos
          cursos={[
            "Curso de Arquitectura de la Información con Usaria",
            "Curso de Arquitectura de la Información con Usaria",
            "Curso de Arquitectura de la Información con Usaria",
          ]}
        />
        <Reconocimiento />
        <Footer />
      </>
    );
  }
}

export default Cursos;
