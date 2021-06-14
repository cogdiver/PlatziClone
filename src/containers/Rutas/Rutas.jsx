import React, { Component } from "react";
import imgRuta from "../../assets/static/ruta.png";
import CursosRutas from "../../components/CursosRutas/CursosRutas";
import Glosario from "../../components/Glosario/Glosario";
import Teachers from "../../components/Teachers/Teachers";
import BlogsPost from "../../components/BlogsPost/BlogsPost";
import RutaShow from "../../components/RutaShow/RutaShow";
import Footer from "../../components/Footer/Footer";
import Down from "../../components/svg/Down";
import Encabezado from "../../components/Encabezado/Encabezado";

class Rutas extends Component {
  render() {
    const ruta = {
      id: "idioma-ingles",
      logo: "",
      name: "Escuela de Inglés",
      teachers: "",
      blogposts: [],
      glosario: [],
      categoria: "",
      description:
        "Aprende inglés desde cero. Consigue oportunidades de trabajo internacionales y duplica tus ingresos al comunicarte efectivamente en inglés.",
      levels: [
        {
          level: "basico",
          cursos: [
            "estrategias-ingles",
            "ingles-principiantes",
            "taller-principiantes",
            "ingles-basico",
            "ingles-gramatica",
            "ingles-basico-descripciones-comparativos",
            "ingles-conversacion",
            "ingles-conversacionpronunciacion-ingles",
            "ingles-compras",
            "ingles-basico-escritura",
          ],
        },
        {
          level: "intermedio",
          cursos: [
            "ingles-1",
            "ingles-2",
            "ingles-facil-speaking",
            "ingles-practico-pronuncia",
            "intermedio-gramatica",
            "ingles-intermedio-conversacion",
            "pronunciacion-intermedio",
            "ingles-trabajo",
            "ingles-intermedio",
          ],
        },
        {
          level: "avanzado",
          cursos: [
            "gramatica-b2",
            "inglesb2-conversacion",
            "avanzado-gramatica",
            "conversacion-avanzado",
            "pronunciacion-avanzado",
            "ingles-avanzado-trabajo",
          ],
        },
        {
          level: "complementario",
          cursos: [
            "ingles-customer-service",
            "entrevistas-ingles",
            "ingles",
            "escritura-ingles",
            "ingles-developers",
            "ingles-marketing",
            "ingles-negocios",
            "ingles-finanzas",
            "ingles-startups",
            "preparacion-toefl",
            "preparacion-ielts",
            "ingles-produccion",
            "ingles-viajes",
          ],
        },
      ],
    };
    return (
      <>
        <div className="hero">
          <img src={imgRuta} alt="" />
          <h3>{ruta.name}</h3>
          <p>{ruta.description}</p>
          <input type="button" value="Agregar a mis rutas" />
        </div>
        <section>
          <div className="barra" />
          <Encabezado encabezados={["cursos", "descripción"]} />
          <CursosRutas levels={ruta.levels} />
          <div className="description">
            <h2>Descripción de la ruta</h2>
          </div>
        </section>
        <div className="glosario">
          <div className="barra" />
          <h3>Glosario</h3>
          <Glosario id={ruta.id} />
          <a href="/">
            <p>Ver más terminos</p>
            <Down />
          </a>
        </div>
        <div className="teachers">
          <div className="barra" />
          <h3>Aprende de los mejores</h3>
          <Teachers id={ruta.id} />
        </div>
        <div className="blogs-post">
          <div className="barra" />
          <h3>Blog Posts</h3>
          <BlogsPost />
        </div>
        <div className="relacionadas">
          <div className="barra" />
          <h3>Rutas relacionadas para complementar tu aprendizaje</h3>
          <RutaShow id="Ruta relacionada" />
        </div>
        <Footer />
      </>
    );
  }
}

export default Rutas;
