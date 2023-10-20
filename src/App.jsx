// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SendPokemon } from "./components/PokemonGet";
import PokemonList from "./components/PokemonListed";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <SendPokemon>
          <div className="content">
            <Router>
              <Routes>
                <Route path="/" element={<PokemonList />} />
              </Routes>
            </Router>
          </div>
        </SendPokemon>
      </div>
    </>
  );
}

export default App;
