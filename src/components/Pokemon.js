import { useContext } from 'react';
import FavoritesContext from '../context/favoritesContext';

const Pokemon = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoritesContext);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? (
    <span className="material-icons">favorite</span>
  ) : (
    <span className="material-icons">favorite_border</span>
  );

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-image">
        <img
          className="pokemon-card-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="pokemon-card-info">
        <div className="pokemon-card-top">
          <h2 className="pokemon-card-name">{pokemon.name}</h2>
          <p className="pokemon-card-number">#{pokemon.id}</p>
        </div>
        <div className="pokemon-card-bottom">
          <p className="pokemon-card-type">
            {pokemon.types.map((type) => type.type.name).join(', ')}
          </p>
          <button
            className="pokemon-card-button"
            onClick={() => onHeartClick()}
          >
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
