import React, { Component } from 'react';

class Idioma extends Component {
  render() {
    const { abrev, img } = this.props;
    return (
      <div className='idioma'>
        <p>{abrev}</p>
        <img src={img} alt='' />
      </div>
    );
  }
}

export default Idioma;
