import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  left: 0;
  top: 0;

  display:flex;
  align-items:center;
  
  margin: 0 auto;
  width: 100vw;
  height: 5vh;
  background-color: ${(props) => {
    return props.theme.secondary;
  }};

  z-index: 1;
`;
