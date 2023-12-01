import Menu from "./Menu";
import styled, { keyframes } from "styled-components";

const efeito = keyframes`
  from { opacity: 0.4; }
  to { opacity: 1; }
`;

const StyledCabecalho = styled.header`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    border: none;
    height: 4px;
    background-color: pink;
    width: 50%;
    margin: 8px auto;
  }

  h1 {
    animation-name: ${efeito};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      <h1>Olá React! 😎</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
