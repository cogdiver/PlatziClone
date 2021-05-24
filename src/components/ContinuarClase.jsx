import React, { Component } from 'react';
import imageClase from '../assets/static/clase.jpg';
import play from '../assets/static/play.png';
import curso from '../assets/static/curso.png';
import '../assets/styles/_ContinuarClase.scss';

class ContinuarClase extends Component {
  render() {
    return (
      <div className='ContinuarClase'>
        <div className='previo'>
          <img className='imagenClase' src={imageClase} alt='Clase' />
          <div className='icon'>
            <img src={play} alt='' />
          </div>
        </div>
        <div className='descripcion'>
          <p className='nombreClase'>Nombre de la clase</p>
          <div className='nombreCurso'>
            <img src={curso} alt='' />
            <p>Nombre del curso</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContinuarClase;
