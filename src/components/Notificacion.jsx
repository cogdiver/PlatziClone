import React, { Component } from 'react';

class Notificacion extends Component {
  render() {
    return (
      <div className='notificacion'>
        <span>
          <strong>Daniel</strong>
          {' '}
          publicó un nuevo post
          <br />
          Guía para lanzar un producto digital
        </span>
        <span className='time'>2d</span>
      </div>
    );
  }
}

export default Notificacion;
