import { createContext, useState, useEffect } from 'react';
import {getCriptomonedas} from '../services/getCriptomonedas';

export const CriptomonedasContext = createContext();

const CriptomonedasProvider = (props) => {

    //datos de la api
    const [criptomonedas, setCriptomonedas] = useState([]);

    const todoCriptomonedas = ()=>getCriptomonedas(setCriptomonedas);

    useEffect(() => {
      todoCriptomonedas();
    }, [])

    return (
        <CriptomonedasContext.Provider
         value={{criptomonedas}}
        >
          {props.children}
        </CriptomonedasContext.Provider>
    )

}

export default CriptomonedasProvider;