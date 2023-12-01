import styled from "styled-components";
import Artigo from "./Artigo";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  hr {
    border: none;
    border-bottom: outset 1px;
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 2;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;
    }

    .artigos article {
      margin: 0;
      width: 32%;
    }
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        <Artigo />
        <Artigo />
        <Artigo />
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
