const Navbar = () => {
  const logoNav =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <div className="navbar">
      <img alt="PokeApi" src={logoNav} className="navbar__logo" />
    </div>
  );
};

export default Navbar;
