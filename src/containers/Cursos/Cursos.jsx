import React, { Component } from "react";
import Hero from "../../components/HeroCursos/HeroCursos";
import Contenido from "../../components/Contenido/Contenido";
import Escuelas from "../../components/Escuelas/Escuelas";
import Docente from "../../components/Docente/Docente";
import Comentarios from "../../components/Comentarios/Comentarios";
import Estadisticas from "../../components/Estadisticas/Estadisticas";
import Comunidad from "../../components/Comunidad/Comunidad";
import MoreCursos from "../../components/MoreCursos/MoreCursos";
import Reconocimiento from "../../components/Reconocimiento/Reconocimiento";
import Footer from "../../components/Footer/Footer";

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
