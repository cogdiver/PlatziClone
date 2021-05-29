import React, { Component } from 'react';
import Down from './svg/Down';
import Abandonar from './svg/Agregar';
import Arrastrar from './svg/Tuerca';
import ruta from '../assets/static/ruta.png';

class Ruta extends Component {
  render() {
    return (
      <div className='ruta'>
        <div className='description'>
          <Arrastrar />
          <img src={ruta} alt='' />
          <p>Escuela de Habilidades Blandas</p>
          <Down />
        </div>
        <div className='avance'>
          <span>50%</span>
          <div className='barra'>
            <div className='barraprogreso' />
          </div>
          <Abandonar />
        </div>
      </div>
    );
  }
}

export default Ruta;
