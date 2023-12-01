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
  }
`;

function Artigo(props) {
  return (
    <StyledArtigo>
      <h3>
        {props.titulo} {props.icone}
      </h3>
    </StyledArtigo>
  );
}

export default Artigo;
