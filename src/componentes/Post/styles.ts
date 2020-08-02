import styled, { css } from "styled-components";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

interface Props {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  border-radius: 16px;
  padding: 8px;

  margin: 8px 0;
  background-color: ${(props) => {
    return props.theme.secondary;
  }};
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

export const Content = styled.div`
  margin: 4px 0px;
  padding: 8px;
`;

export const ContentReact = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => {
    return props.theme.quaternary;
  }};

  border-radius:8px;

  width: 100%;
  min-height: 35px;

  > div {
    cursor: pointer;
    display:flex;
    align-items:center;

    &.active,
    &:hover {

      > svg {
        fill: ${(props) => {
          return props.theme.secondary;
        }};

        transition: all 0.3s;

        & + span {
          color: ${(props) => {
            return props.theme.third;
          }};
          
          transition: all 0.3s;
        }
      }
    }
  }
`;

const cssIcon = css`
  height: 18px;
  width: 18px;

  margin: 0 5px;
`;

export const ThumbsUp = styled(FaThumbsUp)<Props>`
  ${cssIcon}
`;
export const Comment = styled(FaComment)<Props>`
  ${cssIcon}
`;

export const Share = styled(FaShare)<Props>`
  ${cssIcon}
`;
