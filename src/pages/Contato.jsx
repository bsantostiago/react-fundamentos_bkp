import styled from "styled-components";

export default function Contato() {
  /* useEffect(() => {
    document.title = "Contato";
  }, []); */
  return (
    <StyledContato>
      <h2>Página Contato</h2>
    </StyledContato>
  );
}

const StyledContato = styled.section`
  h2 {
    color: orange;
  }
`;
