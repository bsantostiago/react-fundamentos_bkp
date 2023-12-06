import styled from "styled-components";
import Artigo from "../components/Artigo";
import { useEffect } from "react";

const StyledHome = styled.section`
  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;

      & article {
        margin: 0;
        width: 32%;
      }
    }
  }
`;

export default function Home() {
  useEffect(() => {
    document.title = "Página Inicial";
  }, []);

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
        <Artigo titulo="Front-End" icone="💻">
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
        <Artigo titulo="Back-End" icone="🔐">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur possimus reprehenderit iure error debitis hic eos amet
            aspernatur nostrum odio maxime, quo delectus suscipit corrupti
            dolore exercitationem iusto quis laudantium!
          </p>
        </Artigo>
        <Artigo titulo="Mobile" icone="📱">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Artigo>
      </div>
    </StyledHome>
  );
}
