import React, { Component } from "react";
import Encabezado from "../../components/Encabezado/Encabezado";
import Modulo from "../../components/Modulo/Modulo";
import Down from "../../components/svg/Down";
import Play from "../../components/svg/Play";
import level from "../../assets/static/Básico.png";
import imgTeacher from "../../assets/static/perfil.jpg";
import imgRuta from "../../assets/static/ruta.png";
import proyecto from "../../assets/static/proyecto.png";

class Clases extends Component {
  render() {
    const proyectos = [
      {
        id: 5,
        url: "",
        name: "Diseña la interfaz de una app móvil",
        description:
          "Usando las herramientas de diseño y optimización de interfaces de Adobe XD crearás la interfaz de una app móvil de recomendación de películas. Seguirás el proceso completo desde la creación de artboards, pasando por la creación de grids, la carga de contenido y las pruebas de visualización.",
      },
    ];
    const avance = 5 / 50;
    const curso = {
      id: "adobe-xd",
      logo: "",
      name: "Curso de Adobe XD",
      proyecto: 5,
      fechaPublicacion: "",
      description: "",
      paths: ["diseno-producto", "interfaces-ui"],
      starts: 3.2,
      valoraciones: 800,
      details: {
        contenido: 3,
        practica: 8,
      },
      teacher: "Carlos Jiménez",
      aportes: [],
      blogposts: [],
      proyectos: [],
      temario: [
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
      ],
    };

    const clasesHTML = curso.temario.map((m) => (
      <Modulo key={m.nameModulo} titulo={m.nameModulo} clases={m.class} />
    ));

    const tutorialesHTML = [1, 2, 3].map((e) => <p>{e}</p>);
    const preguntasHTML = [1, 2, 3].map((e) => <p>{e}</p>);

    return (
      <p>
        <section className="presentacion">
          <div className="general">
            <img src={imgRuta} alt="" />
            <div className="curso">
              <p>{curso.name}</p>
              <div className="teacher">
                <span>Intruido por</span>
                <img src={imgTeacher} alt="" />
                <span>{curso.teacher}</span>
              </div>
            </div>
          </div>
          <div className="detalles">
            <img src={level} alt="" />
            <div>
              <span>{curso.details.contenido}</span>
              {curso.details.contenido > 1 ? (
                <span> horas de contenido</span>
              ) : (
                <span> hora de contenido</span>
              )}
            </div>
            <div className="classRutas">
              <span>Ver ruta de aprendizaje</span>
              <Down />
            </div>
          </div>
          {curso.proyecto && (
            <div className="proyecto">
              <img src={proyecto} alt="" />
              <span>Proyecto del curso</span>
              <h3>{proyectos[0].name}</h3>
              <p>{proyectos[0].description}</p>
            </div>
          )}
        </section>
        <section className="contenidoClass">
          <Encabezado
            encabezados={[
              "Contenido del curso",
              "Tutoriales de estudiantes",
              "Preguntas de estudiantes",
            ]}
          />
          <div className="progresoClass">
            <div className="datosClass">
              <div className="barra">
                <div className="estadisticasClass">
                  <span>Progreso del curso: 5/50 contenidos (</span>
                  <span>{avance * 100}</span>
                  <span>%)</span>
                </div>
                <div className="progresoClass">
                  <div className="fondo" />
                  <div className={avance} />
                  <div className="bolitas">
                    <div className="bolita color" />
                    {avance >= 0.1 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                    {avance >= 0.2 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                    {avance >= 0.3 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                    {avance >= 0.4 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                    {avance >= 0.5 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                    {avance >= 0.6 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                    {avance >= 0.7 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                    {avance >= 1 ? (
                      <div className="bolita color" />
                    ) : (
                      <div className="bolita" />
                    )}
                  </div>
                </div>
              </div>
              <div className="botones">
                <div className="boton">
                  <Play />
                  <span>Continuar viendo </span>
                </div>
                <div className="boton">
                  <Play />
                  <span>Presentar el examen </span>
                </div>
              </div>
            </div>
            <div className="contenidoClass">{clasesHTML}</div>
          </div>
          <div className="tutoriales">
            <div className="mensaje">
              <p>
                Es la oportunidad de ayudar a tus compañeros con tu conocimiento
              </p>
              <div className="botton">Crear tutotial</div>
            </div>
            <div className="tutoriales">{tutorialesHTML}</div>
          </div>
          <div className="preguntas">
            <div className="botones">
              <div className="boton">Nuevos</div>
              <div className="boton">Más votados</div>
              <div className="boton">Sin responder</div>
            </div>
            <div className="preguntasItems">{preguntasHTML}</div>
          </div>
        </section>
      </p>
    );
  }
}

export default Clases;
