import React from 'react';
import Header from '../../componentes/Header';
import SideBar from '../../componentes/SideBar';
import FeedComponent from '../../componentes/Feed';
import Messenger from '../../componentes/Messenger';
import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        

          <SideBar />
          <FeedComponent />
          <Messenger />


      </Container>
    </>
  );
}



export default Feed;

