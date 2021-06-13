import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import logo2 from '../assets/static/logo2.png';
import '../assets/styles/_Logo.scss';

class Logo extends Component {
  render() {
    return (
      <>
        <Link to='/' className='logo'>
          <img src={logo} alt='Logo-Platzi' />
          <img src={logo2} alt='Platzi' />
        </Link>
      </>
    );
  }
}

export default Logo;
