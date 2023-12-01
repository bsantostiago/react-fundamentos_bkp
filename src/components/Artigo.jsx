import styled from "styled-components";

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

function Artigo({ titulo, categoria, preco }) {
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
    </StyledArtigo>
  );
}
/* function Artigo(props) {
  return (
    <StyledArtigo>
      <h3>
        {props.titulo} {props.icone}
      </h3>
      {props.children}

      <footer>
        <p>
          <small>
            <i>Responsável: {props.responsavel}</i>
          </small>
        </p>
      </footer>
    </StyledArtigo>
  );
}
 */
export default Artigo;
