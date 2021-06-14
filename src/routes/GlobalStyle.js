import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body {
    background-color: $color-fondo;
    color: $color-fuente;
    font-family: $fuente;
    font-size: 62.5%;
  }
  a{
    text-decoration: none;
    color: $color-fuente;
    cursor: pointer;
  }
`;

export default GlobalStyle;

//export const Theme = (props) => <ThemeProvider>{props.children}</ThemeProvider>;
