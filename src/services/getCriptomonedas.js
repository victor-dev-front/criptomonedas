import axios from 'axios';

export const getCriptomonedas = async(setCriptomonedas) => {

    const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

    const respuesta = await axios.get(url);
    setCriptomonedas(respuesta.data.Data);
   
}