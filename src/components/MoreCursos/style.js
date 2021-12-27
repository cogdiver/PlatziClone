import styled from "styled-components";

const StyledCourses = styled.div`
  .MoreCursos {
    margin: 25px 12px 25px;
    & > h4 {
      font-size: 0.8rem;
      text-align: center;
      margin-bottom: 20px;
    }
    & .cursos {
      display: grid;
      row-gap: 9px;
      & .curso {
        display: grid;
        grid-template-columns: 35px auto;
        align-items: center;
        column-gap: 10px;
        padding: 13px;
        background-color: var(--color_medio);
        border-radius: 5px;
      }
      & img {
        width: 35px;
        height: 35px;
      }
      & p {
        font-size: 0.7rem;
      }
    }
  }
`;
export default StyledCourses;
