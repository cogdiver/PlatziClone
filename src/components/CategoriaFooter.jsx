import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Go from './svg/Down';

class CategoriaFooter extends Component {
  render() {
    const { category, clase } = this.props;
    const nombreclase = `category ${clase}`;

    return (
      <Link to='/' className={nombreclase}>
        <p>{category}</p>
        <Go />
      </Link>
    );
  }
}

export default CategoriaFooter;
