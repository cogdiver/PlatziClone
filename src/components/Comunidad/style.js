import styled from "styled-components";

const StyledComunidad = styled.div`
  background: var(--color_medio);
  padding: 30px 0;
  //Barra
  width: 60px;
  border-top: 2px solid var(--color_azul);
  margin-top: 0;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  //
  //Encabezado;
  & .encabezado {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid var(--color_claro);
    font-size: 0.7rem;
    margin: 10px 6px;
    text-transform: uppercase;
    & span {
      padding: 6px 0;
      width: 100%;
      text-align: center;
      cursor: pointer;
    }
    & span:nth-of-type(1) {
      border-bottom: 3px solid var(--color_verde);
    }
  }
  //
  & > h3 {
    text-align: center;
    margin: 0 12px 12px;
    font-size: 1.2rem;
  }
  & > p {
    font-size: 0.8rem;
    text-align: center;
    margin: 0 15px 15px;
  }
`;

export default StyledComunidad;
