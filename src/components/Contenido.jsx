import React, { Component } from 'react';
import Temario from './Temario';
import Detalles from './Detalles';

class Contenido extends Component {
  render() {
    return (
      <>
        <div className='Contenido'>Contenido</div>
        <Temario />
        <Detalles />
      </>
    );
  }
}

export default Contenido;
