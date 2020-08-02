import React, { useState } from 'react';

import { Container, InfoData, Avatar, InputNewPost, ButtonPost } from './styles';
import api from '../../services/api';


interface Posts {
  id_user: number,
  content: string
}

const NewPost: React.FC = () => {

  const [contentPost, setContentPost] = useState('');

  async function handleClickNewPost(event: React.MouseEvent<HTMLButtonElement>) {
    try {
      await api.post('/post', {
        content: contentPost
      });
  
      console.log('post criado');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <InfoData>
        <Avatar />
        <InputNewPost placeholder="Publique o que você está pensando ... " onChange={(e) => setContentPost(e.target.value)} />
      </InfoData>
      <ButtonPost onClick={handleClickNewPost}>
        Publicar
      </ButtonPost>
    </Container>
  );
}

export default NewPost;