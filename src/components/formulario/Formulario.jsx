import {Formik,Form,ErrorMessage,Field} from 'formik';
import styled from '@emotion/styled';
import { monedas } from '../../data/monedas';

const Button = styled.button`
  background-color: #9497ff;
  border: none;
  width: 40%;
  padding: 1rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  border-radius: .5rem;
  transition:  background-color .3s ease;

  &:hover{
    background-color: #7a7dfe;
  }
`;

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const P = styled.p`
 color: red;
 font-size: 1.5rem;
`;

const Formulario = () => {

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
            onSubmit={(values,{resetForm}) => {
                resetForm();
            }}
        >
        {({errors}) => (

          <Form>
                <div>
                  <Label>Elige tu Moneda</Label>
                  <Field 
                  as='select'
                  name='moneda'
                  >
                    {
                      monedas && monedas.map(moneda =>(
                          <option value={moneda.nombre} key={moneda.id}>{moneda.nombre}</option> 
                      ))
                    }
                  </Field>
                </div>
                <ErrorMessage name='moneda' component={()=>(<P>{errors.moneda}</P>)}/>    

                <div>
                <Label>Elige tu Criptomoneda</Label>
                  <Field 
                  as='select'
                  name='criptomoneda'
                  >
                  </Field>
                </div>
                <ErrorMessage name='criptomoneda' component={()=>(<P>{errors.criptomoneda}</P>)}/>

                <Button>Cotizar</Button>           
          </Form>
        )}
      </Formik>
     );
}
 
export default Formulario;