import React, { Component } from "react";
import Perfil from "../Perfil/Perfil";
import Notificaciones from "../Notificaciones/Notificaciones";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import StyledHeader from "./style";

class Header extends Component {
  render() {
    return (
      <StyledHeader className="header">
        <Logo />
        <div className="right">
          <Menu />
          <Perfil />
          <Notificaciones />
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
