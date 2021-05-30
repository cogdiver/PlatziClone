import React, { Component } from 'react';
import Play from './svg/Play';

class Modulo extends Component {
  render() {
    const { titulo, clases } = this.props;
    const clasesHTML = clases.map((clase) => (
      <div className='clase'>
        <Play />
        <p>{clase}</p>
      </div>
    ));

    return (
      <div className='modulo'>
        <h3>{titulo}</h3>
        <div className='clases'>
          {clasesHTML}
        </div>
      </div>
    );
  }
}

export default Modulo;
