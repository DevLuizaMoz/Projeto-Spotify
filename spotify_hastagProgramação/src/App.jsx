import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artists" element={<Artists />}/>
        <Route path="/artist/:id" element={<Artist />}/>
        <Route path="/songs" element={<Songs />}/>
        <Route path="/song/:id" element={<Song />}/>
      </Routes>
      
      </BrowserRouter>
    </>
  );
};

export default App;


// nomeação de componentes
// PascalCase

//nomeação de Variavel, Função...
//camelCase

//nomeação de classes em css
//metodologia BEM
//Blocks
//Elements
//Modifiers
//bloco__elemento--modificador
//header
//header__link
//header__link--small

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves {} e com o nome exportado

//componentes recebem "props"