import { useContext } from "react";
import { CotizarContext } from "../../context/CotizarContext";
import Formulario from "../formulario/Formulario";
import Resultado from "../resultado/Resultado";

const Main = () => {
  const {verificacion} = useContext(CotizarContext);
    return ( 
      <>
       <Formulario/>
       {verificacion &&  <Resultado/>}
      </>
     );
}
 
export default Main;