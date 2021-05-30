import React, { Component } from 'react';
import Reloj from './svg/Reloj';
import Pesa from './svg/Pesa';

class Detalles extends Component {
  render() {
    return (
      <div className='detalles'>
        <p className='nota'>Para este curso vas a necesitar</p>
        <div className='horas'>
          <div className='horasContenido'>
            <Reloj />
            3 horas de contenido
          </div>
          <div className='horasPractica'>
            <Pesa />
            8 horas de práctica
          </div>
        </div>
      </div>
    );
  }
}

export default Detalles;
