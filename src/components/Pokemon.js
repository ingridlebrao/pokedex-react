const Pokemon = (props) => {
  const { pokemon } = props;
  return <div className="pokemon">{pokemon.name}</div>;
};

export default Pokemon;
