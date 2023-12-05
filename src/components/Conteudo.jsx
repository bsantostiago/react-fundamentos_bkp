import styled from "styled-components";
import Artigo from "./Artigo";
import cursos from "../api/cursos";
import { useState } from "react";

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

function Conteudo() {
  const [filtrarAbaixoDe1000, setFiltrarAbaixoDe1000] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const exemplo2 = () => {
    // setFiltrarAbaixoDe1000((prev) => !prev);

    /* Lógica
    1) filtrarAbaixoDe1000 inicia false
    2) Quando clica no botão, o que era false se torna true devido ao !
    3) E se clicar de novo, o que era true se torna false
    Portanto, é uma alternância booleana do state */
    setFiltrarAbaixoDe1000(!filtrarAbaixoDe1000);
  };

  const filtrarPorCategoria = (categoria) => {
    setCategoriaSelecionada((prev) => (prev === categoria ? null : categoria));
  };

  const cursosExibidos = cursos
    .filter((curso) => !filtrarAbaixoDe1000 || curso.preco < 1000)
    .filter(
      (curso) =>
        !categoriaSelecionada || curso.categoria === categoriaSelecionada
    );

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <button onClick={exemplo2}>
        {filtrarAbaixoDe1000 ? "Esconder" : "Mostrar"} Cursos Abaixo de 1000
      </button>

      <div>
        <button onClick={() => filtrarPorCategoria("Desenvolvimento")}>
          Filtrar por Desenvolvimento
        </button>
        <button onClick={() => filtrarPorCategoria("Design")}>
          Filtrar por Design
        </button>
        {/* Adicione botões para outras categorias conforme necessário */}
        <button onClick={() => filtrarPorCategoria(null)}>
          Limpar Filtro de Categoria
        </button>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        {cursosExibidos.map((curso) => {
          return (
            <Artigo
              key={curso.id}
              titulo={curso.titulo}
              categoria={curso.categoria}
              preco={curso.preco}
            />
          );
        })}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
