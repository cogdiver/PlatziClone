import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Agregar from './svg/Agregar';
import imgCurso from '../assets/static/curso.png';

class NewCourse extends Component {
  render() {
    const { profesor, curso, color } = this.props;
    return (
      <Link to='/' className='new'>
        <div className='course'>
          <img src={imgCurso} alt='' />
          <div className='descripcion'>
            <span>{ curso }</span>
            <div>
              <span>
                Profesor:
                {' '}
                {profesor}
                <span className={color}>Nuevo</span>
              </span>
            </div>
          </div>
          <Agregar />
        </div>
      </Link>
    );
  }
}

export default NewCourse;
