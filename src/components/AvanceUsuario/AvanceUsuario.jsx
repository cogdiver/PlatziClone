import React, { Component } from 'react';
import photoUsuario from '../assets/static/perfil.jpg';

class AvanceUsuario extends Component {
  render() {
    const { cursos } = this.props;
    return (
      <div className='avance'>
        <img src={photoUsuario} alt='' />
        <div className='barra'>
          <div className='barraProgreso'>
            <p>
              {cursos}
              {' '}
              cursos
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AvanceUsuario;
