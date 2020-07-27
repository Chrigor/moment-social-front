import React, { useState } from 'react';

import { Container } from './styles';
import NewPost from '../NewPost';
import Post from '../Post';

const Feed: React.FC = () => {

  const [posts, setPosts] = useState([]);

  return (
    <Container>
      <NewPost />
      <Post contentPost="hello teste asdastgdfashb asdugasyhdgashgd hadsahdh agdhasgvghdgasghjdg asgd dashudashuiasduihdas dashsdahasdjkdas nmdasghdasghasdhdash" id={12135} id_user={4} liked />
      <Post contentPost="hello" id={12135} id_user={4} liked shared />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
      <Post contentPost="hello" id={12135} id_user={4} />
    </Container>
  );
}

export default Feed;