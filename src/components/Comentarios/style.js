import styled from "styled-components";

const StyledComentarios = styled.div`
  margin-top: 45px;
  display: flex;
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
  & .comentario {
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
  }
`;

export default StyledComentarios;
