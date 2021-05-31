import React, { Component } from 'react';

class Encabezado extends Component {
  render() {
    const { encabezados } = this.props;
    const encabezadosHTML = encabezados.map((e) => <span className={e}>{e}</span>);
    return (
      <div className='encabezado'>
        {encabezadosHTML}
      </div>
    );
  }
}

export default Encabezado;
