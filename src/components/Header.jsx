import React, { Component } from 'react';
import Perfil from './Perfil';
import Notificaciones from './Notificaciones';
import Menu from './Menu';
import Logo from './Logo';
import '../assets/styles/_Header.scss';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Logo />
        <div className='right'>
          <Menu />
          <Perfil />
          <Notificaciones />
        </div>
      </header>
    );
  }
}

export default Header;
