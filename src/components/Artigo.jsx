import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;
  animation-name: surgir;
  animation-duration: 300ms;
  animation-fill-mode: backwards;

  @keyframes surgir {
    from {
      transform: scale(0.1);
    }
    to {
      transform: scale(1);
    }
  }

  h3,
  p {
    padding: 0.5rem 0;
  }

  h3 {
    color: purple;
    text-align: center;
  }
`;

function Artigo({ titulo, categoria, preco }) {
  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo>
      <h3>{categoria}</h3>
      <p>
        <b>Curso:</b> {titulo}
      </p>
      <p>
        <b>Preço:</b> {formatarPreco(preco)}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
