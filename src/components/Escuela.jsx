import React, { Component } from 'react';
import escuela from '../assets/static/escuela.jpg';

class Escuela extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className='escuela'>
        <div className='top'>
          <img src={escuela} alt='' />
          <span>Escuela de</span>
          <span>{name}</span>
        </div>
        <div className='cursos'>
          <div className='curso' />
          <div className='curso' />
          <div className='curso' />
        </div>
        <input type='button' value='conocer toda la escuela' className='boton-verde-grande' />
      </div>
    );
  }
}

export default Escuela;
