import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>

        <Post
          nomeUsuario={'beyonce'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'katy perry'}
          fotoUsuario={'https://picsum.photos/38/38'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
          nomeUsuario={'lady gaga'}
          fotoUsuario={'https://picsum.photos/12/12'}
          fotoPost={'https://picsum.photos/200/152'}
        />

      </MainContainer>
    );
  }
}

export default App;
