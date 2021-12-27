import styled from "styled-components";

const StyledReconocimiento = styled.div`
  background-color: var(--color_medio);
  margin-top: 25px;
  padding: 20px 8px;
  display: grid;
  justify-items: center;
  & img {
    width: 304px;
    height: 240px;
    background-color: var(--color_fuente);
    margin-bottom: 15px;
  }
  //Barra
  & .barra {
    width: 60px;
    border-top: 2px solid var(--color_azul);
    margin-top: 0;
    margin-bottom: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  //
  & > h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    text-align: center;
  }
  & p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;
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
  }
`;

export default StyledReconocimiento;
