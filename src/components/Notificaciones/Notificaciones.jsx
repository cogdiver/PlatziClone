import React, { Component } from "react";
import Notificacion from "../Notificacion/Notificacion";
import Campana from "../svg/Campana";
import Arrow from "../svg/Arrow";
import Tuerca from "../svg/Tuerca";
import StyledNotificaciones from "./style";

class Notificaciones extends Component {
  render() {
    return (
      <StyledNotificaciones>
        <Campana />
        <div className="Menu_notificaciones">
          <div className="notificaciones-top">
            <p>Tus Notificaciones</p>
            <Tuerca />
          </div>
          <div className="notificaiones-content">
            <Notificacion />
            <Notificacion />
            <Notificacion />
            <Notificacion />
            <Notificacion />
            <Notificacion />
          </div>
          <div className="notificaciones-bottom">
            <span>Marcar como leídas</span>
            <span>
              Ver todas
              <Arrow />
            </span>
          </div>
        </div>
      </StyledNotificaciones>
    );
  }
}

export default Notificaciones;
