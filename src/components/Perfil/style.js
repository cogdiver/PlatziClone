import styled from "styled-components";

const StyledPerfil = styled.div`
  position: relative;
  & .MenuPerfil {
    display: none;
    box-sizing: border-box;
    position: absolute;
    background-color: var(--color_medio);
    padding: 18px 16px;
    width: 290px;
    right: 0;
    top: 40px;
    height: 270px;
    &.show {
      display: block;
    }
    & .usuario {
      border-top: 2px solid var(--color_fuente);
      border-bottom: 2px solid var(--color_fuente);
      padding: 11px 0;
    }
    & .enlaces {
      display: flex;
      flex-direction: column;
      margin-top: 18px;
      font-size: 0.9rem;
      font-weight: bold;
    }
    & .closed {
      font-weight: bold;
      font-size: 0.9rem;
      color: var(--color_rojo);
      position: absolute;
      bottom: 18px;
    }
  }
  & .InfoPerfil {
    display: flex;
    align-items: center;
    cursor: pointer;
    & img {
      height: 20px;
      border-radius: 50%;
    }
    & span {
      font-size: 0.9rem;
      margin-left: 6px;
      margin-right: 6px;
    }
    & svg {
      height: 13px;
      fill: var(--color_fuente);
    }
  }
  & .enlaces {
    & a {
      display: flex;
      margin-bottom: 7px;
      & svg {
        height: 15px;
        fill: var(--color_azul);
        margin-right: 10px;
      }
    }
  }
  & .usuario {
    & h3 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 3px;
    }
    & div {
      display: flex;
      justify-content: space-between;
    }
    & span {
      font-size: 0.8rem;
      &:nth-of-type(2) {
        color: var(--color_verde);
        font-weight: bold;
      }
    }
    & a {
      display: block;
      color: var(--color_azul);
      font-size: 0.9rem;
      margin-top: 7px;
      font-weight: bold;
    }
  }
`;
export default StyledPerfil;
