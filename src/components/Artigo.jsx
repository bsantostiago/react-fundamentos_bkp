import styled from "styled-components";

/* 2) Em seguida, chamá-la dentro do evento de clique do componente-filho */
function Artigo({ titulo, categoria, preco, onEventoClick }) {
  const formata = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo onClick={onEventoClick}>
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
