import { createContext, useState, useEffect } from 'react';
import { getInfoCriptomonedas } from '../services/getInfoCriptomonedas';


export const CotizarContext = createContext();

const CotizarProvider = (props) => {

    //datos del formulario
    const [monedaCripto, setMonedaCripto] = useState({});

    //datos  de la api
    const [resultado, setResultado] = useState({});
    
    //verificacion para saber si hay datos en el state resultado
    const [verificacion, setVerificacion] = useState(false);
    
    
    const todoMoneda = ()=>getInfoCriptomonedas(monedaCripto,setResultado,setVerificacion);

    useEffect(() => {
        if(Object.keys(monedaCripto).length > 0){
            todoMoneda();
        }
       
    }, [monedaCripto])

    return (
        <CotizarContext.Provider
         value={{setMonedaCripto,resultado,verificacion}}
        >
          {props.children}
        </CotizarContext.Provider>
    )

}

export default CotizarProvider;