import React, { Component } from 'react';
import Down from './svg/Down';
import Abandonar from './svg/Agregar';

class Ruta extends Component {
  render() {
    return (
      <div className='ruta'>
        <div>
          <img src='' alt='' />
          <p>Nombre de la ruta</p>
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
