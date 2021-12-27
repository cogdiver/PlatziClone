import styled from "styled-components";

const StyledContinuar = styled.div`
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
  display: grid;
  grid-template-columns: 110px auto;
  padding: 8px;
  & .previo {
    height: 70px;
    width: 110px;
    position: relative;
    & .imagenClase {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
    & .icon {
      border-radius: 5px;
      background-color: rgba(#000000, 0.4);
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & .descripcion {
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    font-size: 0.8rem;
    padding: 0 10px;
    & .nombreCurso {
      display: flex;
      font-size: 0.7rem;
      align-items: center;
      & img {
        width: 13px;
        margin-right: 5px;
      }
    }
  }
`;
export default StyledContinuar;
