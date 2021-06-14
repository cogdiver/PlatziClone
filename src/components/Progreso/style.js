import styled from "styled-components";

const StyledProgreso = styled.div`
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
  font-size: 0.8rem;
  & .encabezado {
    display: flex;
    align-content: center;
    justify-content: space-between;
    & span {
      font-size: 0.8rem;
      & span {
        color: var(--color_azul);
      }
      &:nth-of-type(2) {
        font-size: 0.7rem;
      }
    }
  }
  & .avance {
    color: var(--color_fuente);
    display: flex;
    align-items: center;
    margin-top: 10px;
    & img {
      height: 15px;
      border-radius: 15px;
    }
    & .barra {
      width: 100%;
      height: 12px;
      background-color: var(--color_fuente);
      border-radius: 15px;
      margin-left: 10px;
      & .barraProgreso {
        height: inherit;
        background-color: var(--color_verde);
        width: calc(100% - 10px);
        border-radius: 15px;
        padding-left: 15px;
        display: flex;
        align-items: center;
        font-size: 0.7rem;
        font-weight: bold;
        color: var(--color_oscuro);
      }
    }
    &:nth-of-type(3) .barraProgreso {
      background-color: var(--color_azul);
      width: 50%;
    }
  }
`;
export default StyledProgreso;
