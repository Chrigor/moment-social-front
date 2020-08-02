import React, { useState } from 'react';
import api from '../../services/api';
import { Container, Avatar, Content, ContentReact, ThumbsUp, Comment, Share, PostInfo } from './styles';


interface Props {
  _id: string;
  id_user: Number;
  contentPost: string;
  liked?: boolean;
  shared?: boolean;
  commented?: boolean;
}

const Post: React.FC<Props> = ({ _id, id_user, contentPost, liked, shared, commented }) => {

  const [like, setLike] = useState(liked);
  const [share, setShare] = useState(shared);
  const [comment, setComment] = useState(commented);


  function handleClickLike(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    setLike(!like);

    async function createLike(id_post: string) {
      api.post('/like', {
        id_post
      }).then((response) => {
        console.log(response);
      });
    }

    try {
      createLike(_id);
      console.log("Deu boom");
    } catch (error) {
      setLike(!like);
    }

    // aqui vai conter uma chamada a API para registro na tabela
  }

  function handleClickShare(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    setShare(!share);

    async function createShare(id_post: string) {
      api.post('/share', {
        id_post
      }).then((response) => {
        console.log(response);
      });
    }

    try {
      createShare(_id);
      console.log("Deu boom");
    } catch (error) {
      setShare(!share);
    }

  }

  function handleClickComment(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    setComment(!comment);

    // aqui vai conter uma chamada a API para registro na tabela
  }

  return (
    <Container id={_id}>
      <PostInfo>
        <Avatar />
        <strong>{id_user}</strong>
      </PostInfo>
      <Content>
        <p>{contentPost}</p>
      </Content>
      <ContentReact>
        <div className={like ? "active " : ""} onClick={handleClickLike}>
          <ThumbsUp />
          <span>Like</span>
        </div>

        <div className={comment ? "active" : ""} onClick={handleClickComment}>
          <Comment />
          <span>Comment</span>
        </div>

        <div className={share ? "active" : ""} onClick={handleClickShare}>
          <Share />
          <span>Share</span>
        </div>

      </ContentReact>
    </Container>
  );
}

export default Post;