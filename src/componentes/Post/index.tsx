import React from 'react';

import { Container, Avatar, Content, ContentReact, ThumbsUp, Comment, Share } from './styles';


interface Props {
  id: Number;
  id_user: Number;
  contentPost: String;
  liked?: boolean;
  shared?: boolean;
}

const Post: React.FC<Props> = ({ contentPost, liked, shared }) => {
  return (
    <Container>
      <Avatar />
      <Content>
        <p>{contentPost}</p>
      </Content>
      <ContentReact>
        <div className={liked ? "active " : ""}>
          <ThumbsUp />
          <span>Like</span>
        </div>

        <div className="containerAction">
          <Comment />
          <span>Comment</span>
        </div>

        <div className={shared ? "active" : ""} >
          <Share />
          <span>Share</span>
        </div>

      </ContentReact>
    </Container>
  );
}

export default Post;