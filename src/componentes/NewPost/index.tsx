import React from 'react';

import { Container, InfoData, Avatar, InputNewPost, ButtonPost } from './styles';

const NewPost: React.FC = () => {
  return (
    <Container>
      <InfoData>
        <Avatar />
        <InputNewPost placeholder="Publique o que você está pensando ... "/>
      </InfoData>
      <ButtonPost>
        Publicar
      </ButtonPost>
    </Container>
  );
}

export default NewPost;