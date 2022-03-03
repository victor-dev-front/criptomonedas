import axios from 'axios';

export const getInfoCriptomonedas = async(monedaCripto,setResultado,setVerificacion) => {

   const {moneda,criptomoneda} = monedaCripto;
    
   const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

   const respuesta = await axios.get(url);
   setResultado(respuesta.data.DISPLAY[criptomoneda][moneda]);
   setVerificacion(true);
   
}