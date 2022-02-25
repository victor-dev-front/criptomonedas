import { createContext, useState, useEffect } from 'react';
import { getCriptomonedas } from '../services/getCriptomonedas'; 

export const CriptomonedasContext = createContext();

const CategoriasProvider = (props) => {

    const [categories, setCategories] = useState([]);

    const todoCategories = () => getCategories(setCategories);

    useEffect(() => {
      todoCategories();
    }, [])

    return (
        <CategoriasContext.Provider
         value={{categories}}
        >
          {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;