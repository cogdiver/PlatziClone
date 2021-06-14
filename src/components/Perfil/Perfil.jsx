import React, { Component } from "react";
import { Link } from "react-router-dom";
import photoUsuario from "../../assets/static/perfil.jpg";
import Down from "../svg/Down";
import Empleos from "../svg/Empleos";
import MesGratis from "../svg/MesGratis";
import Suscripcion from "../svg/Suscripcion";
import Contacto from "../svg/Contacto";
import "../../assets/styles/_Perfil.scss";

class InfoPerfil extends Component {
  render() {
    return (
      <div className="Perfil">
        <div className="InfoPerfil">
          <img src={photoUsuario} alt="Foto de Perfil" />
          <span>31.341 pts</span>
          <Down />
        </div>
        <div className="MenuPerfil">
          <div className="usuario">
            <h3>¡Hola, usuario!</h3>
            <div>
              <span>Platzi Expert+</span>
              <span>Tienes 731 días de tu plan</span>
            </div>
            <Link to="/">Ver mi perfil</Link>
          </div>
          <div className="enlaces">
            <Link to="/">
              <Empleos />
              <p>Empleos</p>
            </Link>
            <Link to="/">
              <MesGratis />
              <p>Obtén 1 mes gratis</p>
            </Link>
            <Link to="/">
              <Suscripcion />
              <p>Mi suscripción</p>
            </Link>
            <Link to="/">
              <Contacto />
              <p>Contactanos</p>
            </Link>
          </div>
          <Link to="/" className="closed">
            Cerrar sesión
          </Link>
        </div>
      </div>
    );
  }
}

export default InfoPerfil;
