import styled from "styled-components";
import Artigo from "./Artigo";
import cursos from "../api/cursos";

const StyledConteudo = styled.main`
  width: 90vw;
  max-width: 800px;
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
      justify-content: flex-start;
      align-items: stretch;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }

    .artigos article {
      margin: 4px;
      width: 48%;
    }
  }
`;
/* Exercício */
const responsaveis = ["Neil Peart", "Alex Lifeson", "Geddy Lee"];

function Conteudo() {
  console.log(cursos);

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
        {cursos.map((curso) => {
          return (
            <Artigo
              key={curso.id}
              titulo={curso.titulo}
              categoria={curso.categoria}
              preco={curso.preco}
            ></Artigo>
          );
        })}

        <Artigo titulo="Front-End" icone="💻" responsavel={responsaveis[0]}>
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
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
