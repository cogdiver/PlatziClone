import styled from "styled-components";

const StyledMenu = styled.div`
  font-size: 0.9rem;
  position: relative;
  & span {
    cursor: pointer;
  }
  & div {
    display: none;
    flex-direction: column;
    box-shadow: var(--sombra);
    background-color: var(--color_medio);
    position: absolute;
    right: 0;
    top: 30px;
    width: 200px;
    padding: 15px;
    &.show {
      display: flex;
    }
    & a {
      text-align: center;
      width: 100%;
      font-size: 1.3rem;
      border-bottom: 1.5px solid var(--color_claro);
      margin-top: 10px;
      padding-bottom: 3px;
    }
  }
`;

export default StyledMenu;
