/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './api';
import './App.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import SearchBar from './components/SearchBar';
import { FavoriteProvider } from './context/favoritesContext';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const itemsPerPage = 24;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons(itemsPerPage, page * itemsPerPage);

      const promises = result.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);

      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(result.count / itemsPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex > -1) {
      updateFavorites.splice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }
    setFavorites(updateFavorites);
  };

  return (
    <>
      <FavoriteProvider
        value={{
          favoritePokemons: favorites,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <div>
          <Navbar />
          <SearchBar />
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </div>
      </FavoriteProvider>
    </>
  );
}

export default App;
