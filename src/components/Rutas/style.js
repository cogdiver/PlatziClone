import styled from "styled-components";

const StyledRutas = styled.div`
  display: none;
  width: 100%;
  background-color: var(--color_oscuro);
  & .ruta {
    //Contenedor
    display: block;
    background-color: var(--color_medio);
    border-radius: 6px;
    margin: 0 12px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid var(--color_azul);
    }
    //
    max-width: 290px;
    margin-bottom: 3px;
    display: grid;
    row-gap: 8px;
    & .description {
      display: grid;
      align-items: center;
      grid-template-columns: 12px 40px auto 13px;
      column-gap: 8px;
      font-size: 0.9rem;
      & img {
        height: 40px;
        width: 40px;
      }
      & svg {
        fill: var(--color_fuente);
      }
    }
    & .avance {
      align-items: center;
      display: grid;
      justify-items: center;
      column-gap: 10px;
      grid-template-columns: 40px auto 17px;
      font-size: 0.8rem;
      & .barra {
        border-radius: 10px;
        height: 7px;
        background-color: var(--color_fuente);
        width: 100%;
        & .barraprogreso {
          border-radius: 10px;
          height: inherit;
          background-color: var(--color_verde);
          width: 50%;
        }
      }
      & svg {
        fill: var(--color_fuente);
      }
    }
  }
`;
export default StyledRutas;
