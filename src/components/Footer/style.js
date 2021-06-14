import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: var(--color_oscuro);
  display: grid;
  justify-items: center;
  padding: 15px;
  & .logo img {
    height: 30px;
  }
  & .mensaje {
    text-align: center;
    margin: 22px 0 15px;
    font-size: 0.9rem;
  }
  & svg {
    fill: var(--color_fuente);
    width: 20px;
    max-height: 20px;
  }
  & .redes {
    display: grid;
    grid-template-columns: repeat(4, 20px);
    grid-template-rows: 20px;
    column-gap: 25px;
  }
  & .categorias {
    margin: 30px auto;
    width: 250px;
    & .category {
      border-left: transparent 4px solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding-left: 10px;
      font-size: 0.7rem;
    }
    & svg {
      transform: rotate(-90deg);
      height: 10px;
    }
    //@include colorCategory(0, 1, 1);
  }
  & .reconocimientos {
    margin: 0 auto 20px;
    display: grid;
    justify-items: center;
    font-size: 0.8rem;
    & img {
      height: 25px;
      margin: 10px 10px 20px;
    }
  }
  & .correo {
    font-size: 0.8rem;
    text-align: center;
    & .inputs {
      display: flex;
      justify-content: center;
      margin-top: 11px;
      & input {
        height: 35px;
        box-sizing: border-box;
        border: 1px solid var(--color_azul);
      }
      & .text {
        border-radius: 4px 0 0 4px;
        border-radius: 4px;
        font-size: 0.7rem;
        background-color: transparent;
        color: var(--color_fuente);
        padding: 0 10px;
        width: 185px;
        outline: none;
        &::placeholder {
          color: var(--color_fuente);
        }
        &:focus::placeholder {
          color: var(--color_opaco);
        }
      }
      & .button {
        border-radius: 0 4px 4px 0;
        background-color: var(--color_azul);
        padding: 10px 16px;
        margin-left: -5px;
        text-transform: capitalize;
        font-weight: bold;
      }
    }
  }
  & .enlaces {
    justify-content: center;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.7rem;
    & > a {
      margin: 0 5px 7px;
    }
  }
  & .idiomas {
    margin-top: 15px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, auto);
    column-gap: 20px;
    & .idioma {
      border: 1px solid var(--color_opaco);
      border-radius: 3px;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      & img {
        width: 16px;
        height: 16px;
        border-radius: 16px;
        margin-left: 10px;
      }
    }
  }
  & .deLATAM {
    font-size: 0.8rem;
    margin-top: 15px;
    margin-bottom: 20px;
  }
`;

export default StyledFooter;
