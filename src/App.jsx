import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Helmet>
                  <title>Inicial</title>
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/produtos"
            element={
              <>
                <Helmet>
                  <title>Produtos</title>
                </Helmet>
                <Produtos />
              </>
            }
          />
          <Route
            path="/contato"
            element={
              <>
                <Helmet>
                  <title>Contato</title>
                </Helmet>
                <Contato />
              </>
            }
          />
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
