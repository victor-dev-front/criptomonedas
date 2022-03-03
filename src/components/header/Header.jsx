import styled from '@emotion/styled';

const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  margin-top: 3rem;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  line-height: 1.5;

  @media(min-width:768px){
    font-size: 4rem;
  }
`;

const Header = () => {
    return(  <H1>Cotiza Criptomonedas al Instante</H1> );
}
 
export default Header;