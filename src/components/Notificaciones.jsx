import React, { Component } from 'react';
import Notificacion from './Notificacion';
import Campana from './svg/Campana';
import Arrow from './svg/Arrow';
import Tuerca from './svg/Tuerca';
import '../assets/styles/_Notificaciones.scss';

class Notificaciones extends Component {
  render() {
    return (
      <div className='Notificaciones'>
        <Campana />
        <div className='Menu_notificaciones'>
          <div className='notificaciones-top'>
            <p>Tus Notificaciones</p>
            <Tuerca />
          </div>
          <div className='notificaiones-content'>
            <Notificacion />
            <Notificacion />
            <Notificacion />
            <Notificacion />
            <Notificacion />
            <Notificacion />
          </div>
          <div className='notificaciones-bottom'>
            <span>Marcar como leídas</span>
            <span>
              Ver todas
              <Arrow />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Notificaciones;
