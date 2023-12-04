import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;
  animation-name: surgir;
  animation-duration: 300ms;
  animation-fill-mode: backwards;
  /* Nem fazer isso na aula */
  animation-delay: ${(props) => props.delay || "100ms"};

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

function Artigo({ titulo, icone, children, responsavel, delay }) {
  return (
    <StyledArtigo delay={`${delay}`}>
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

export default Artigo;
