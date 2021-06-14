import styled from "styled-components";

const StyledHero = styled.div`
  display: grid;
  grid-template-rows: 40px min-content auto min-content;
  padding: 20px;
  row-gap: 15px;
  background-color: rgba(var(--color_opaco), 0.1);
  & img {
    width: 40px;
    height: 40px;
  }
  & h2 {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
  & .valoracion {
    display: flex;
    align-items: center;
    & .estrellas {
      display: flex;
      & svg {
        fill: var(--color_amarillo);
        height: 13px;
        width: 13px;
        margin-right: 2px;
      }
    }
    & .valoraciones {
      font-size: 0.8rem;
      color: var(--color_azul);
      margin: 0 20px 0 5px;
    }
    & .level {
      display: flex;
      border-radius: 5px;
      border: 1px solid var(--color_opaco);
      padding: 3px 8px;
      height: 15px;
      align-items: center;
      font-size: 0.8rem;
      & svg {
        height: inherit;
        margin-right: 8px;
      }
    }
  }
  & .descripcion {
    font-size: 0.8rem;
    padding-top: 5px;
  }
  & .cta {
    display: flex;
    align-items: center;
    & svg {
      width: 25px;
      height: 25px;
      fill: var(--color_azul);
      margin-left: 15px;
      cursor: pointer;
    }
    & input {
      //Boton grande
      background-color: var(--color_azul);
      color: var(--color_medio);
      border: 1px solid var(--color_azul);
      width: 100%;
      padding: 8px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      //
    }
  }
`;

export default StyledHero;
