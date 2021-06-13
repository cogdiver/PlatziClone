import React, { Component } from 'react';
import AvanceUsuario from './AvanceUsuario';
import '../assets/styles/_Progreso.scss';

class Progreso extends Component {
  render() {
    return (
      <div className='progreso'>
        <div className='encabezado'>
          <span>
            Tú progreso vs.
            <span> tu Beneficiario</span>
          </span>
          <span>Expert+</span>
        </div>
        <AvanceUsuario cursos='120' />
        <AvanceUsuario cursos='60' />
      </div>
    );
  }
}

export default Progreso;
