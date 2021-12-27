import styled from "styled-components";

const StyledDocente = styled.div`
  margin: 0 12px;
  & img {
    width: 100px;
    height: 120px;
    margin: 21px 0;
    background-color: var(--color_medio);
    border-radius: 5px;
  }
  //Barra(0, auto);
  width: 60px;
  border-top: 2px solid var(--color_azul);
  margin-top: 0;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: 0;
  //
  & h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  & .name {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 2px;
  }
  & .cargo,
  .detalles {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--color_opaco);
  }
  & .descripcion {
    margin-bottom: 13px;
  }
  & .detalles {
    margin-bottom: 20px;
  }
  & input {
    //Boton grande
    background-color: var(--color_verde);
    color: var(--color_medio);
    border: 1px solid var(--color_verde);
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    //
  }
`;

export default StyledDocente;
