import { useContext } from "react";
import { CotizarContext } from "../../context/CotizarContext";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const ContenedorText = styled.div`
margin-top: 2rem;
  display:flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10% 2rem 10%;
`;

const Texto = styled.p`
 font-size: 1.4rem;
 line-height: 1;

 @media(min-width: 768px){
   font-size: 1.7rem;
  line-height: 1;
  }
`;

const Precio = styled.p`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  span{
      font-weight: 700;
  }

  @media(min-width: 768px){
   font-size: 2.2rem;
   
  }
`;

const Img = styled.img`
  display: block;
  width: 50%;
 
`;

const Resultado  = () => {

    const {resultado} = useContext(CotizarContext);
    const{PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado;
    
    return ( 
        <Contenedor>
            <Img src={`http://cryptocompare.com/${IMAGEURL}`}  alt="imagen cripto"/>
            <ContenedorText>
                <Precio>El Precio es de: <span> {PRICE}</span></Precio>
                <Texto>Precio mas alto del día: <span> {HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del día: <span> {LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span> {CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span> {LASTUPDATE}</span></Texto>
            </ContenedorText>
        </Contenedor>
     );
}
 
export default Resultado;