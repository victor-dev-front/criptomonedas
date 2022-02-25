import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import imagenCrpto  from "./img/imagen-criptos.png";

const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`;

const Img = styled.img`
  margin: 5rem auto 0  auto;
  display: block;
`;

function App() {
  return (
    <Container>
      <H1>Desde app</H1>
      <Img 
       src={imagenCrpto}
      />
    </Container>
  )
}

export default App
