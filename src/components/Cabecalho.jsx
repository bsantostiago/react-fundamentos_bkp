import Menu from "./Menu";
import styled from "styled-components";

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
    background-color: aqua;
    width: 50%;
    margin: 8px auto;
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
