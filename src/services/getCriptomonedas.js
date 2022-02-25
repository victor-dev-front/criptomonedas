import Axios from 'axios';

export const getMonedas = async() => {

    const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const monedas = await Axios.get(url);
   // setMonedas(monedas.data);
    console.log(monedas.data);
}