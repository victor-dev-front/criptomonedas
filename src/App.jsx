import styled from '@emotion/styled';
import { Container } from 'react-bootstrap';
import imagenCrpto  from './img/imagen-criptos.png';
import Header from './components/header/Header';
import Main from './components/main/Main';


const Img = styled.img`
  margin: 2rem auto 0  auto;
  display: block;
`;

function App() {
  return (
      <Container>
        <Header/>
        <Img 
          src={imagenCrpto}
        />
        <Main/>
      </Container>
  )
}

export default App
