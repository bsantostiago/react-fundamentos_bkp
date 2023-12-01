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

function Artigo({ titulo, icone, children, responsavel }) {
  return (
    <StyledArtigo>
      <h3>
        {titulo} {icone}
      </h3>
      {children}

      <footer>
        <p>
          <small>
            <i>Responsável: {responsavel}</i>
          </small>
        </p>
      </footer>
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
