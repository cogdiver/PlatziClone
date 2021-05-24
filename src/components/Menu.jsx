import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/_Menu.scss';

const Menu = () => {
  return (
    <div className='menu-Home' id='menu-Home'>
      <span>Menú</span>
      <div className='menuOculto'>
        <Link to='/'>Clases</Link>
        <Link to='/'>Blog</Link>
        <Link to='/'>Foro</Link>
        <Link to='/'>Agenda</Link>
        <Link to='/'>TV</Link>
        <Link to='/'>Planes</Link>
      </div>
    </div>
  );
};

export default Menu;
