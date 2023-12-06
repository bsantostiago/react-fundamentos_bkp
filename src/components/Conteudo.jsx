import styled from "styled-components";
import Artigo from "./Artigo";
import cursos from "../api/cursos";

function Conteudo() {
  const exemplo2 = () => {
    alert("Exemplo 2");
  };

  /* Também usado do filho pro pai */
  function exemplo3(valor) {
    alert(`Exemplo 3: ${valor}`);
  }

  return (
    <StyledConteudo>
      <h2 onClick={() => exemplo3("pai")}>Conteúdo da aplicação</h2>
      <button onClick={exemplo2}>Exemplo 2: evento/função</button>
      <div className="artigos">
        {cursos.map((curso) => {
          return (
            <Artigo
              // onClick={exemplo3} // não dá
              /* 1) Passamos a função como uma propriedade para o componente-filho: */
              // onClick={() => exemplo3(curso.titulo)} // não dá
              // handleClick={() => exemplo3(curso.titulo)}
              aoClicar={() => exemplo3(curso.titulo)}
              key={curso.id}
              titulo={curso.titulo}
              categoria={curso.categoria}
              preco={curso.preco}
            >
              <p>coisa e tal....</p>
            </Artigo>
          );
        })}
      </div>
    </StyledConteudo>
  );
}

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

    button {
      margin: 8px 0;
    }
  }
`;

export default Conteudo;
