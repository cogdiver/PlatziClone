import styled from "styled-components";

const StyledEscuelas = styled.div`
  margin-top: 30px;
  background-color: var(--color_medio);
  padding-top: 20px;
  //Barra
  & .barra {
    width: 60px;
    border-top: 2px solid var(--color_azul);
    margin-top: 0;
    margin-bottom: 15px;
    margin-right: auto;
    margin-left: 12px;
  }
  //
  & h3 {
    font-size: 1.1rem;
    margin: 0 12px;
  }
  & .escuelas {
    display: flex;
    padding: 20px;
    overflow-x: scroll;
    //Scroll
    &::-webkit-scrollbar {
      width: 3.5px;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 5px;
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        background: var(--color_opaco);
      }
    }
    //
    & .escuela {
      margin-left: 10px;
      padding: 10px;
      border-radius: 6px;
      background-color: var(--color_claro);
      & .top {
        height: 50px;
        padding: 7px 2px;
        background-color: #bba1ff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        color: #372859;
        font-size: 0.8rem;
        & img {
          height: 100%;
          margin-right: 6px;
        }
        & span {
          display: block;
          width: 100%;
          & span {
            font-weight: bold;
          }
        }
      }
      & .cursos {
        margin: 15px 5px 20px;
        display: grid;
        row-gap: 14px;
        position: relative;
        & .union {
          position: absolute;
          top: 5px;
          bottom: 5px;
          left: 12px;
          border-left: 2px solid #bba1ff;
        }
        & .curso {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 25px auto;
          column-gap: 10px;
          align-items: center;
          color: var(--color_opaco);
          &:hover {
            color: var(--color_fuente);
            cursor: pointer;
          }
          & img {
            width: 25px;
            height: 25px;
            border-radius: 25px;
          }
          & p {
            font-size: 0.9rem;
          }
          & span {
            font-size: 0.7rem;
          }
        }
      }
      & .boton-verde-grande {
        //Boton grande(var(--color_verde), 0);
        color: var(--color_verde);
        background-color: transparent;
        border: 1px solid var(--color_verde);
        width: 100%;
        padding: 8px;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        //
        width: max-content;
        padding: 7px 12px;
        margin: 0 15px 10px;
        font-size: 0.7rem;
        &:hover {
          background-color: var(--color_verde);
          color: var(--color_claro);
        }
      }
    }
  }
`;

export default StyledEscuelas;
