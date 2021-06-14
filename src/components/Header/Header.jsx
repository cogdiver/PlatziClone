import React, { Component } from "react";
import Perfil from "../Perfil/Perfil";
import Notificaciones from "../Notificaciones/Notificaciones";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import "../../assets/styles/_Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <div className="right">
          <Menu />
          <Perfil />
          <Notificaciones />
        </div>
      </header>
    );
  }
}

export default Header;
