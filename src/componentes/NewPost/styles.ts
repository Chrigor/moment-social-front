import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 125px;
  width: 100%;
  max-width: 700px;

  border-radius: 8px;
  padding: 8px;

  background-color: ${(props) => {
    return props.theme.primary;
  }};
`;

export const InfoData = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Avatar = styled.div`
  height: 45px;
  width: 45px;

  flex-shrink: 0;
  border-radius: 50%;

  background-color: ${(props) => {
    return props.theme.third;
  }};
`;

export const InputNewPost = styled.input`
  width: 100%;
  min-height: 45px;
  margin-left: 8px;
  padding: 16px;
  border-radius: 24px;

  overflow: hidden;
  resize: both;

  background-color: ${(props) => {
    return props.theme.third;
  }};

  &:focus {
    border: none;
    outline: 0;
  }
`;

export const ButtonPost = styled.button`
  align-self: flex-end;

  height: 36px;
  width: 100px;

  margin: 18px 0px;

  border-radius: 10px;
  transition: all ease-in 0.1s;

  background-color: ${(props) => {
    return props.theme.third;
  }};

  color: ${(props) => {
    return props.theme.secondary;
  }};

  &:hover {
    background-color: ${(props) => {
      return props.theme.secondary;
    }};

    color: ${(props) => {
      return props.theme.third;
    }};
  }

  &:focus {
    border: none;
    outline: 0;
  }
`;
