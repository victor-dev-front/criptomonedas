import styled from '@emotion/styled';
import { Container } from 'react-bootstrap';
import imagenCrpto  from './img/imagen-criptos.png';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CriptomonedasProvider from './context/CriptomonedasContext';
import CotizarProvider from './context/CotizarContext';


const Img = styled.img`
  margin: 2rem auto 0  auto;
  display: block;
`;

function App() {
  return (
    <CotizarProvider>
      <CriptomonedasProvider>
        <Container>
          <Header/>
          <Img 
            src={imagenCrpto}
          />
          <Main/>
        </Container>
      </CriptomonedasProvider>
    </CotizarProvider>
  )
}

export default App
