import styled from "styled-components";

const StyledNotificaciones = styled.div`
  & .campana {
    height: 23px;
    fill: var(--color_fuente);
    position: relative;
    cursor: pointer;
  }

  & .Menu_notificaciones {
    display: none;
    height: 300px;
    position: absolute;
    background-color: var(--color_medio);
    width: 300px;
    right: 10px;
    top: 50px;
    box-shadow: var(--sombra);
    &.show {
      display: block;
    }
  }
  & .notificaciones-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--color_claro);
    padding-bottom: 5px;
    margin: 10px;
    & p {
      font-size: 1rem;
    }
    & svg {
      height: 15px;
      fill: var(--color_fuente);
      cursor: pointer;
      padding-right: 5px;
      &:hover {
        fill: var(--color_azul);
      }
    }
  }
  & .notificaiones-content {
    height: 210px;
    margin-top: 5px;
    overflow-y: scroll;
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
    & .notificacion {
      display: grid;
      grid-template-columns: 230px auto;
      padding: 15px 12px;
      align-items: center;
      margin-bottom: 3px;
      background-color: var(--color_claro);
      border-radius: 6px;
      font-size: 0.85rem;
      margin: 0 7px 3px 10px;
      & strong {
        color: var(--color_opaco);
      }
      & .time {
        color: var(--color_opaco);
      }
    }
  }
  & .notificaciones-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    font-size: 0.9rem;
    color: var(--color_azul);
    justify-content: space-between;
    border-top: 2px solid var(--color_claro);
    margin: 0 10px;
    padding: 5px 10px 10px;
    & span {
      cursor: pointer;
      align-items: center;
    }
    & span:nth-of-type(2) {
      display: flex;
    }
    & svg {
      height: 12px;
      fill: var(--color_fuente);
      margin-left: 3px;
    }
  }
`;
export default StyledNotificaciones;
