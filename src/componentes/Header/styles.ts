import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  left:0;
  top:0;
  margin:0 auto;
  width:100vw;
  height: 70px;
  background-color: ${(props) => {
      return props.theme.secondary;
    }};
  
`;
