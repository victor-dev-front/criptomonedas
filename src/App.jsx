import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CriptomonedasProvider from './context/CriptomonedasContext';
import CotizarProvider from './context/CotizarContext';




function App() {
  return (
    <CotizarProvider>
      <CriptomonedasProvider>
        <Container>
          <Header/>
          <Main/>
        </Container>
      </CriptomonedasProvider>
    </CotizarProvider>
  )
}

export default App
