import React, { Component } from 'react';
import '../assets/styles/_Reconocimiento.scss';

class Reconocimiento extends Component {
  render() {
    return (
      <div className='reconocimiento'>
        <img src='' alt='' className='diploma' />
        <div className='barra' />
        <h3>¡Obtén reconocimiento por tu trabajo!</h3>
        <p>
          Comparte tus logros con tu familia, amigos, empleadores y la comunidad.

          Apenas termines el curso tendrás acceso al diploma digital y cuando finalices la carrera te enviaremos el diploma en papel a tu casa.
        </p>
        <input type='button' value='continuar aprendiendo' />
      </div>
    );
  }
}

export default Reconocimiento;
