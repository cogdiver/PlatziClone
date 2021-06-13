import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/_Footer.scss";
import Twitter from "./svg/Twitter";
import Youtube from "./svg/Youtube";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import CategoriaFooter from "./CategoriaFooter";
import logo from "../assets/static/logo.png";
import logoLetras from "../assets/static/logo2.png";
import brasil from "../assets/static/brazil.jpg";
import espana from "../assets/static/espana.jpg";
import united from "../assets/static/united-states.jpg";
import ibm from "../assets/static/logo-ibm.png";
import unity from "../assets/static/logo-unity.png";
import yc from "../assets/static/yc.png";
import asu from "../assets/static/asugsv.png";

class Footer extends Component {
  render() {
    const enlaces = [
      "Preguntas frecuentas",
      "Contáctanos",
      "Prensa",
      "Conferencias",
      "Términos y Condiciones",
      "Privacidad",
      "Estudiantes",
      "Hola",
    ];
    const enlacesHTML = enlaces.map((enlace) => (
      <Link key={enlace} to="/">
        {enlace}
      </Link>
    ));

    const categorias = [
      ["Marketing", "marketing"],
      ["Diseño y UX", "ux"],
      ["Inglés", "ingles"],
      ["Startups", "startups"],
      ["Desarrollo e Ingeniería", "desarrollo"],
      ["Habilidades Blandas", "habilidades"],
      ["Negocios y Emprendimiento", "negocio"],
      ["Contenido Digital", "contenido"],
    ];
    const categoriasHTML = categorias.map((category) => (
      <CategoriaFooter
        key={category[1]}
        category={category[0]}
        clase={category[1]}
      />
    ));

    return (
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="" />
          <img src={logoLetras} alt="" />
        </div>
        <p className="mensaje">
          Transformamos la economía de nuestros países entrenando a la próxima
          generación de profesionales en tecnología.
          <br />
          <br />
          Aprende en nuestras redes:
        </p>
        <div className="redes">
          <Twitter />
          <Youtube />
          <Facebook />
          <Instagram />
        </div>
        <div className="categorias">{categoriasHTML}</div>
        <div className="reconocimientos">
          <p>Certificados oficiales en tecnologías</p>
          <div className="imagenes">
            <img src={ibm} alt="" />
            <img src={unity} alt="" />
          </div>
          <p>Reconocidos y premiados por</p>
          <div className="imagenes">
            <img src={yc} alt="" />
            <img src={asu} alt="" />
          </div>
        </div>
        <div className="correo">
          <p>
            Entérate de todas las novedades en educación, negocios y tecnología
          </p>
          <div className="inputs">
            <input
              className="text"
              type="text"
              placeholder="Ingresa tu correo electrónico"
            />
            <input className="button" type="button" value="suscríbete" />
          </div>
        </div>
        <div className="enlaces">{enlacesHTML}</div>
        <div className="idiomas">
          <div className="idioma">
            <p>PT</p>
            <img src={brasil} alt="" />
          </div>
          <div className="idioma">
            <p>ES</p>
            <img src={espana} alt="" />
          </div>
          <div className="idioma">
            <p>EN</p>
            <img src={united} alt="" />
          </div>
        </div>
        <p className="deLATAM">De LATAM con 💚 para el mundo</p>
      </div>
    );
  }
}

export default Footer;
