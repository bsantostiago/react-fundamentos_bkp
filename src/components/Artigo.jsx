import styled from "styled-components";

function Artigo({ titulo, categoria, preco }) {
  const formata = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo>
      <h3>Curso: {titulo}</h3>
      <h4>Categoria: {categoria}</h4>
      <p>
        <b>Preço: </b>
        {formata(preco)}
      </p>
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
