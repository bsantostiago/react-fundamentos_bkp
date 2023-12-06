import cursos from "../api/cursos";
import styled from "styled-components";
import Artigo from "../components/Artigo";

const StyledHome = styled.section`
  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      flex-wrap: wrap;

      & article {
        margin: 1%;
        width: 48%;
      }
    }
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <h2>Página inicial</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        {cursos.map((curso) => (
          <Artigo
            key={curso.id}
            titulo={curso.titulo}
            categoria={curso.categoria}
            preco={curso.preco}
          />
        ))}
      </div>
    </StyledHome>
  );
}
