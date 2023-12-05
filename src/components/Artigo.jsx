import styled from "styled-components";

function Artigo({ titulo, categoria, preco, children }) {
  const formataPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };
  /* Talvez melhor não usar preço */
  return (
    <StyledArtigo>
      <h3>Curso: {titulo}</h3>
      <h4>Categoria: {categoria}</h4>
      <p>
        <b>Preço:</b> {formataPreco(preco || 0)}
      </p>
      {children}
    </StyledArtigo>
  );
}

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;

  h3,
  p {
    padding: 0.5rem 0;
  }

  h3 {
    color: purple;
    text-align: center;
  }
`;

export default Artigo;
