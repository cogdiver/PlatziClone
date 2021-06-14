import styled from "styled-components";

const StyledEstadisticas = styled.div`
  margin: 25px 10px;
  display: grid;
  row-gap: 25px;
  & .dato {
    display: grid;
    grid-template-columns: 15px auto;
    column-gap: 10px;
    align-items: center;
    & .bolita {
      width: 15px;
      height: 15px;
      background-color: var(--color_verde);
      border-radius: 20px;
    }
    & p {
      font-size: 0.9rem;
    }
  }
`;

export default StyledEstadisticas;
