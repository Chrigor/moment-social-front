import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import NewPost from '../NewPost';
import Post from '../Post';

import api from '../../services/api';


interface Posts {
  _id: string;
  id_user:number;
  content:string;
}

const Feed: React.FC = () => {

  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    async function getPosts(page = 1) {
      let { data } = await api.get('/post');
      console.log(data);
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <Container>
      <NewPost />
      {
        posts && posts.map(({id_user, _id, content}) => (
          <Post 
            _id={_id}
            contentPost={content}
            id_user={id_user}
          />
        ))
      }
    </Container>
  );
}

export default Feed;