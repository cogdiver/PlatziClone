import styled from "styled-components";

const StyledCourse = styled.div`
  display: grid;
  grid-template-columns: 35px auto 30px;
  align-items: center;
  column-gap: 15px;
  & img {
    height: 35px;
  }
  & .descripcion {
    display: grid;
    grid-template-columns: 100%;
    font-size: 1rem;
    font-weight: bold;
    & div {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 0.7rem;
      color: var(--color_opaco);
      & .verde {
        margin-left: 10px;
        background-color: rgba(var(--color_verde), 0.4);
        color: var(--color_verde);
        padding: 2px 6px;
        border-radius: 10px;
      }
    }
  }
  & svg {
    fill: var(--color_azul);
    margin-right: 5px;
  }
`;
export default StyledCourse;
