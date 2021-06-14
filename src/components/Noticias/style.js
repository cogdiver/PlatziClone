import styled from "styled-components";

const StyledNoticias = styled.section`
  margin-bottom: 40px;
  & .new {
    //Contenedor
    display: block;
    background-color: var(--color_medio);
    border-radius: 6px;
    margin: 0 12px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid var(--color_azul);
    }
    //
    margin-top: 10px;
  }
`;

export default StyledNoticias;
