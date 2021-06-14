import styled from "styled-components";

export const StyledPost = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  & img {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 5px;
  }
  & .description {
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    padding: 0 10px;
    font-size: 0.95rem;
    & .autor {
      display: flex;
      align-items: center;
      margin-top: 10px;
      & img {
        height: 15px;
        width: 15px;
        border-radius: 15px;
      }
      & p {
        font-size: 0.8rem;
        color: var(--color_opaco);
        margin-left: 5px;
      }
    }
  }
`;
export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  & .interaccion {
    display: flex;
    & div {
      display: flex;
      margin-right: 15px;
    }
    & svg {
      height: 15px;
      box-sizing: content-box;
      fill: var(--color_fuente);
    }
    & span {
      margin-left: 5px;
      font-size: 0.8rem;
    }
  }
  & p {
    font-size: 0.7rem;
    margin-right: 5px;
  }
`;
