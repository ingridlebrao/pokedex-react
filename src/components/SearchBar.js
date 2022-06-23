import { useState } from 'react';
import { searchPokemon } from '../api';

const SearchBar = () => {
  const [search, setSearch] = useState('dito');
  const [pokemon, setPokemon] = useState();
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <>
      <div className="searchbar-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Buscar pokémon"
          onChange={onChangeHandler}
        />

        <div className="searchbar-btn">
          <button
            className="searchbar-btn-search"
            onClick={onButtonClickHandler}
          >
            Buscar
          </button>
        </div>
      </div>
      {pokemon ? (
        <div className="pokemon-container">
          <div className="pokemon-card">
            <div className="pokemon-name">{pokemon.name}</div>
            <div className="pokemon-image">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchBar;
