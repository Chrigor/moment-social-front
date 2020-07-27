import styled from "styled-components";

export const Container = styled.div`
  /* background: blue; */
  padding: 8px;
  height: 100vh;
  width: 100%;
  max-width: 700px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => {
      return props.theme.secondary;
    }};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => {
      return props.theme.third;
    }};
  }
`;
