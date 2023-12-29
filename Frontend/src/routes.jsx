import React from "react";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/Sobre" element={<Sobre />}></Route>
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
