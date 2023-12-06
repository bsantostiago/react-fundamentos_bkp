import { useEffect } from "react";
import styled from "styled-components";

export default function Produtos() {
  useEffect(() => {
    document.title = "Produtos";
  }, []);
  return (
    <StyledProdutos>
      <h2>Página Produtos</h2>
      <p>Veja a lista de produtos que vendemos:</p>
    </StyledProdutos>
  );
}

const StyledProdutos = styled.section`
  h2 {
    color: purple;
  }
  p {
    font-family: Verdana;
  }
`;
