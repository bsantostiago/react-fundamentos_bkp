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
    line-height: 1;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
    }

    .artigos article {
      margin: 0;
      width: 32%;
    }
  }
`;

function Conteudo() {
  const responsaveis = ["Neil Peart", "Alex Lifeson", "Geddy Lee"];

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
        <Artigo
          titulo="Front-End"
          icone="💻"
          responsavel={responsaveis[0]}
          delay="100ms"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            omnis!
          </p>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </Artigo>
        <Artigo
          titulo="Back-End"
          icone="🔐"
          responsavel={responsaveis[1]}
          delay="200ms"
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur possimus reprehenderit iure error debitis hic eos amet
            aspernatur nostrum odio maxime, quo delectus suscipit corrupti
            dolore exercitationem iusto quis laudantium!
          </p>
        </Artigo>
        <Artigo
          titulo="Mobile"
          icone="📱"
          responsavel={responsaveis[2]}
          delay="300ms"
        >
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Artigo>
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
