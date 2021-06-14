import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
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
`;
export default StyledHome;
