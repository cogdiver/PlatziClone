import React, { Component } from 'react';
import Perfil from './menus/Perfil';
import Notificaciones from './menus/Notificaciones';
import Menu from './menus/Menu';

class Header extends Component {
  render() {
    return (
      <>
        <h1>Header</h1>
        <Menu />
        <Perfil />
        <Notificaciones />
      </>
    );
  }
}

export default Header;
