import React, { Component } from 'react';
import Buscador from './Buscador';
import Categorias from './Categorias';

class Buscar extends Component {
  render() {
    return (
      <div className='menuBuscar'>
        <Buscador />
        <Categorias />
        <Categorias />
        <Categorias />
      </div>
    );
  }
}

export default Buscar;
