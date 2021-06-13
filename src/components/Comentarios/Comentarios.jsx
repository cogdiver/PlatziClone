import React, { Component } from 'react';
import Comentario from './Comentario';
import '../assets/styles/_Comentarios.scss';

class Comentarios extends Component {
  render() {
    const comentarios = ['comentario1', 'comentario2', 'comentario1', 'comentario2'];
    const comentariosHTML = comentarios.map((c) => <Comentario comentario={c} />);

    return (
      <div className='comentarios'>
        {comentariosHTML}
      </div>
    );
  }
}

export default Comentarios;
