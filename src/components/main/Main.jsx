import { useContext } from "react";
import { CotizarContext } from "../../context/CotizarContext";
import Formulario from "../formulario/Formulario";
import Resultado from "../resultado/Resultado";
import imagenCrpto  from '../../img/imagen-criptos.png';
import styled from "@emotion/styled";

const Img = styled.img`
  margin: 2rem auto 0  auto;
  display: block;

  @media(min-width: 1140px){
    margin: 0 auto;
    width: 70%; 
  };
`;

const ContenedorPrincipal = styled.div`
  @media(min-width: 1140px){
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 40rem;
  }
`;

const ContenedorSegundario = styled.div`
    @media(min-width: 1140px){
    display:grid;
    grid-template-columns: 43% 57%;
    
  }
`;

const Main = () => {
  const {verificacion} = useContext(CotizarContext);
    return ( 
      <ContenedorPrincipal>
        <Img 
              src={imagenCrpto}
        />
        <ContenedorSegundario>
          <Formulario/>
          {verificacion &&  <Resultado/>}
        </ContenedorSegundario>
      </ContenedorPrincipal>
     );
}
 
export default Main;