import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  > section {
    display: flex;
    justify-content: space-between;

    height: 600px;
    width: 800px;

    > div.imageBackground {
      width: 30%;
      height: 100%;
      background-color: ${(props) => {
        return props.theme.third;
      }};

      border-radius: 8px 0px 0px 8px;
    }

    > div.content {
      display: flex;
      flex-direction: column;

      width: 70%;
      height: 100%;

      background-color: ${(props) => {
        return props.theme.primary;
      }};

      border-radius: 0px 8px 8px 0px;

      > h1 {
        font-size: 40px;
        margin: 32px auto;
        color: ${(props) => {
          return props.theme.third;
        }};
      }

      > div.more {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-top: 16px;

        a {
          text-decoration:none;
          color:violet;
          margin-bottom: 8px;

          transition: 0.2s;

          &:hover {
            opacity:0.9;
          }
        }
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  background: red;

  margin-top: 32px;
  padding: 16px 0px;

  > div.wrapper-input {
    position: relative;
    background-color:transparent;
  

    margin: 8px 8px 2px 8px;
    padding:0;

    > input {
      height: 40px;
      width: 100%;

      padding: 8px 32px;
      border-radius: 4px;
      
      background-color: ${(props) => {
        return props.theme.quaternary;
      }};
    }

    > svg {
      position: absolute;
      top: 8px;
      left: 4px;
      height: 24px;
      width: 24px;
    }
  }

  > button {
    align-self: center;

    margin-top: 24px;

    height: 40px;
    width: 126px;

    border-radius: 20px;

    border: 1px solid ${(props) => props.theme.secondary};

    background-color: ${(props) => {
      return props.theme.third;
    }};

    transition: all 0.3s;
  }

  > button:hover {
    border: 1px solid ${(props) => props.theme.third};

    background-color: ${(props) => {
      return props.theme.secondary;
    }};

    color: ${(props) => {
      return props.theme.quaternary;
    }};
  }
`;
