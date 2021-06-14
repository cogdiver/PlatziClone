import React, { Component } from "react";
import Modulo from "../Modulo/Modulo";

class Temario extends Component {
  render() {
    const modulos = [
      {
        nameModulo:
          "Conocer la importancia de utilizar una herramienta especializada en el diseño de interfaces",
        class: [
          {
            id: 0,
            nameClass:
              "Platzi te da la bienvenida a la Escuela de Product Design",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Qué es AdobeXD y por qué usar AdobeXD",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Instalación",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
        ],
      },
      {
        nameModulo: "Crear y configurar un nuevo proyecto",
        class: [
          {
            id: 0,
            nameClass: "Creación de un documento",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Interfaz y navegación",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Atajos de teclado",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Artboards",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Grids y layouts",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
        ],
      },
      {
        nameModulo: "Utilizar las herramientas de Diseño",
        class: [
          {
            id: 0,
            nameClass: "Formas",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Alinear y combinar formas",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Diseñar icono",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Textos y tipografía",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Imágenes y máscaras",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Pluma",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
        ],
      },
      {
        nameModulo: "Optimizar el trabajo con herramientas avanzadas",
        class: [
          {
            id: 0,
            nameClass: "Repeat grid tool",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Cargar contenido en repeat grid tool",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Componentes",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Panel de assets",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Responsive Resize",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "UI Kits",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
        ],
      },
      {
        nameModulo: "Diseñar una app",
        class: [
          {
            id: 0,
            nameClass: "Wireframes del proyecto:sección cartelera",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Wireframes del proyecto: menú inferior",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Mockups del proyecto",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass:
              "Definiendo la paleta de color para el mockup del proyecto",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Teoría del color para el diseño de interfaces",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Agregar contenido al mockup del proyecto",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
        ],
      },
      {
        nameModulo: "Crear prototipos interactivos",
        class: [
          {
            id: 0,
            nameClass: "Prototipado",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Animaciones automáticas con Adobe XD",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Animaciones avanzadas",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
        ],
      },
      {
        nameModulo:
          "Aplicar las mejores prácticas y herramientas para exportar los proyectos",
        class: [
          {
            id: 0,
            nameClass: "Exportado",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Compartir",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
          {
            id: 0,
            nameClass: "Conclusiones",
            duracion: 600,
            comentarios: [0, 1, 2, 3],
          },
        ],
      },
    ];

    const modulosHTML = modulos.map((m) => (
      <Modulo key={m.nameModulo} titulo={m.nameModulo} clases={m.class} />
    ));

    return (
      <div className="temario">
        <p className="nota"> Temario del Curso de Adobe XD</p>
        <div className="modulos">{modulosHTML}</div>
      </div>
    );
  }
}

export default Temario;
