import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  :root{
    --fuente: 'Roboto', sans-serif;
    --color_oscuro: #03091e;
    --color_fondo: #0c1633;
    --color_medio: #121f3d;
    --color_claro: #263755;
    --color_opaco: #637b9d;
    --color_azul: #33b1ff;
    --color_verde: #98ca3f;
    --color_amarillo: #fddd5b;
    --color_rojo: #FF4842;
    --color_fuente: #ffffff;
    --color_marketing: #29B8E8;
    --color_ux: #6B407E;
    --color_ingles: #E32020;
    --color_startups: #1E7C6A;
    --color_desarrollo: #33B13A;
    --color_habilidades: #CB161D;
    --color_negocio: #F5C443;
    --color_contenido: #FA7800;

    --sombra: -10px 10px 20px 0px color_oscuro,
  }
  *{
    margin: 0;
    padding: 0;
  }
  body {
    background-color: var(--color_fondo);
    color: var(--color_fuente);
    font-family: var(--fuente);
    font-size: 62.5%;
  }
  a{
    text-decoration: none;
    color: var(--color_fuente);
    cursor: pointer;
  }
`;
export default GlobalStyle;
