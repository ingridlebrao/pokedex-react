import Pokemon from './Pokemon';

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div className="pokedex">
      <div className="pokedex-header">
        <h1 className="pokedex-header">Pokedex</h1>
        <div className="pokedex-paginacao">Página:</div>
      </div>
      {loading ? (
        <div className="pokedex-loading">
          <div className="pokedex-loading-text">Carregando...</div>
        </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
