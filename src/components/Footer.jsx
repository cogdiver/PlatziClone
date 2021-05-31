import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/_Footer.scss';
import Twitter from './svg/Twitter';
import Youtube from './svg/Youtube';
import Facebook from './svg/Facebook';
import Instagram from './svg/Instagram';
import CategoriaFooter from './CategoriaFooter';
import Idioma from './Idioma';
import logo from '../assets/static/logo.png';
import logoLetras from '../assets/static/logo2.png';

class Footer extends Component {
  render() {
    const enlaces = ['Preguntas frecuentas', 'Contáctanos', 'Prensa', 'Conferencias', 'Términos y Condiciones', 'Privacidad', 'Estudiantes', 'Hola'];
    const enlacesHTML = enlaces.map((enlace) => <Link to='/'>{enlace}</Link>);
    return (
      <div className='footer'>
        <div className='logo'>
          <img src={logo} alt='' />
          <img src={logoLetras} alt='' />
        </div>
        <p className='mensaje' />
        <div className='redes'>
          <Twitter />
          <Youtube />
          <Facebook />
          <Instagram />
        </div>
        <div className='categorias'>
          <CategoriaFooter />
        </div>
        <div className='reconocimientos' />
        <div className='correo'>
          <p>Entérate de todas las novedades en educación, negocios y tecnología</p>
          <input type='text' value='Ingresa tu correo electrónico' />
          <input type='button' value='suscribete' />
        </div>
        <div className='enlaces'>
          {enlacesHTML}
        </div>
        <div className="idiomas">
          <Idioma abrev='PT' img='../assets/static/perfil.jpg'/>
          <Idioma abrev='ES' img='../assets/static/perfil.jpg'/>
          <Idioma abrev='EN' img='../assets/static/perfil.jpg'/>
        </div>
      </div>
    );
  }
}

export default Footer;
