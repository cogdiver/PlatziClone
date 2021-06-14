import React from "react";
import { Link } from "react-router-dom";
import StyledMenu from "./style";

const Menu = () => {
  return (
    <div className="menu-Home" id="menu-Home">
      <span>Menú</span>
      <StyledMenu>
        <Link to="/">Clases</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Foro</Link>
        <Link to="/">Agenda</Link>
        <Link to="/">TV</Link>
        <Link to="/">Planes</Link>
      </StyledMenu>
    </div>
  );
};

export default Menu;
