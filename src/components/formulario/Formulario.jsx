import { useContext } from 'react';
import {Formik,Form,ErrorMessage,Field} from 'formik';
import styled from '@emotion/styled';
import { monedas } from '../../data/monedas';
import { CriptomonedasContext } from '../../context/CriptomonedasContext';
import { CotizarContext } from '../../context/CotizarContext';
import theme from '../formulario/formulario.module.css';

const Contenedor = styled.div`
 margin-top: 1rem;
`;

const ContenedorForm = styled.div`
 display: flex;
 flex-direction: column;
 margin: 0 10%;
`;

const Button = styled.button`
  background-color: #9497ff;
  border: none;
  width: 40%;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.3rem;
  border-radius: .5rem;
  transition:  background-color .3s ease;


  &:hover{
    background-color: #7a7dfe;
  }

  @media(min-width: 768px){
   font-size: 1.7rem;
   width: 30%;
  }

  @media(min-width: 1140px){
   width: 70%;
  }
`;

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;

  @media(min-width: 768px){
   font-size: 2rem;
  }
`;

const P = styled.p`
 color: red;
 font-size: 1.5rem;
`;

const Formulario = () => {

   const {criptomonedas} = useContext(CriptomonedasContext);
   const {setMonedaCripto} = useContext(CotizarContext);

    return ( 
        <Formik
            initialValues={{
                moneda:"",
                criptomoneda:""
            }}
            validate={(values) => {
                let errores ={};

                if(!values.moneda){
                    errores.moneda='seleccione una moneda'
                }

                if(!values.criptomoneda){
                    errores.criptomoneda='seleccione una criptomoneda '
                }
                return errores;
            }}
            onSubmit={(values) => {
                setMonedaCripto(values);
            }}
        >
        {({errors}) => (
         
          <Form>
            <ContenedorForm>
                <Contenedor>
                  <Label>Elige tu Moneda</Label>
                  <Field 
                  as='select'
                  name='moneda'
                  className= {theme.input}
                  >
                    <option value={""}>--seleccione--</option>
                    {
                      monedas && monedas.map(moneda =>(
                          <option value={moneda.id} key={moneda.id}>{moneda.nombre}</option> 
                      ))
                    }
                  </Field>
                </Contenedor>
                <ErrorMessage name='moneda' component={()=>(<P>{errors.moneda}</P>)}/>    

                <Contenedor>
                <Label>Elige tu Criptomoneda</Label>
                  <Field 
                  as='select'
                  name='criptomoneda'
                  className= {theme.input}
                  >
                     <option value={""}>--seleccione--</option>
                    {
                      criptomonedas && criptomonedas.map(criptomoneda =>(
                        <option value={criptomoneda.CoinInfo.Name} 
                                key={criptomoneda.CoinInfo.Name}
                        >
                          {criptomoneda.CoinInfo.FullName}
                        </option>
                      ))
                    }
                  </Field>
                </Contenedor>
                <ErrorMessage name='criptomoneda' component={()=>(<P>{errors.criptomoneda}</P>)}/>
                
                   <Button type='submit'>Cotizar</Button> 
              </ContenedorForm>
                          
          </Form>
        )}
        </Formik>
    
     );
}
 
export default Formulario;