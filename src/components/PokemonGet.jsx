import React, { useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = React.createContext();

export function SendPokemon({ children }) {
	const [pokemonList, setPokemonList] = useState([]);
  const BASE_API_URL = `https://pokeapi.co/api/v2/pokemon/`;
	useEffect(() => {
    async function getPokemon() {
      await axios
        .get(`${BASE_API_URL}`)
        .then((response) => {
          setPokemonList(response.data.results);;
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }
    getPokemon();
      

	}, []);

	return (
		<PokemonContext.Provider value={{ pokemonList }}>
			{children}
		</PokemonContext.Provider>
	);
}