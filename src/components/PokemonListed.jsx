import { useContext, useState } from "react";
import { PokemonContext } from "./PokemonGet";
import './PokemonListed.css'; 

function PokemonList() {
    const { pokemonList } = useContext(PokemonContext);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const NextPageHandler = () => {setCurrentPage(2);}

    const PrevPageHandler = () => {setCurrentPage(1);};

    return (
      <div className="centered-content">
        <h1 className="judul">Tugas Modul 5 Kelompok 29 Praktikum RPBLK</h1>
        <h2 className="subjudul">Daftar Pokemon {currentPage}</h2>
        <div className="PokemonContainer">
          <ul className="PokemonList">
            {pokemonList.slice(startIndex, endIndex).map((pokemon, index) => (
              <li key={index} className="PokemonList">
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="pagination">
          <button onClick={PrevPageHandler} disabled={currentPage === 1}>Previous Page </button>
          <button onClick={NextPageHandler} disabled={currentPage === 2}>Next Page </button>
        </div>
      </div>
    );
}

export default PokemonList;