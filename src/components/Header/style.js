import styled from "styled-components";

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  //position: fixed;
  z-index: 100;
  background-color: var(--color_medio);
  display: flex;
  height: 54px;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  & .right {
    display: grid;
    grid-template-areas: "perfil notif menu";
    align-items: center;
    & .menu-Home {
      grid-area: menu;
    }
    & .Notificaciones {
      grid-area: notif;
      margin-right: 10px;
    }
    & .Perfil {
      grid-area: perfil;
      margin-right: 10px;
    }
  }
`;
export default StyledHeader;
