import styled from "styled-components";

const StyledRodape = styled.footer`
  background-image: linear-gradient(black, purple);
  color: ${(props) => props.cor || "white"};
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Rodape(props) {
  return (
    <StyledRodape {...props}>
      <h2>Rodapé da aplicação - Cor usada: {props.cor}</h2>
    </StyledRodape>
  );
}

export default Rodape;
