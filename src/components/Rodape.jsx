import styled from "styled-components";

const StyledRodape = styled.footer`
  background-image: linear-gradient(black, purple);
  color: white;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Rodape(props) {
  return (
    <StyledRodape>
      <h2>Rodapé da aplicação</h2>
    </StyledRodape>
  );
}

export default Rodape;
