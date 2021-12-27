import styled from "styled-components";

const StyledContenido = styled.div`
  margin-top: 20px;
  //Barra
  width: 60px;
  border-top: 2px solid var(--color_azul);
  margin-top: 0;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  //
  //Encabezado(2);
  & .encabezado {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    margin: 0 12px;
  }
  & h3 {
    font-size: 1.2rem;
  }
  & .contenido {
    margin: 15px 12px 0;
    & .nota {
      color: var(--color_opaco);
      font-size: 0.7rem;
      font-weight: bold;
      margin-bottom: 8px;
    }
    & .temario {
      & .modulo {
        font-size: 0.8rem;
        padding-bottom: 3px;
        border-bottom: 1px solid var(--color_claro);
        & h3 {
          margin-bottom: 8px;
          margin-top: 10px;
        }
        & .clase {
          display: grid;
          align-items: center;
          padding: 15px;
          grid-template-columns: 11px auto;
          column-gap: 10px;
          background-color: var(--color_claro);
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 3px;
          & svg {
            fill: var(--color_azul);
          }
          & p {
            font-size: 0.8rem;
            font-weight: lighter;
          }
        }
      }
    }
    & .detalles {
      display: none;
      & .horas {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & div {
          display: flex;
          font-size: 1rem;
          align-items: center;
          & svg {
            fill: var(--color_fuente);
            margin-right: 10px;
          }
        }
        & .horasContenido svg {
          height: 24px;
        }
        & .horasPractica svg {
          height: 21px;
        }
      }
    }
  }
`;
export default StyledContenido;
