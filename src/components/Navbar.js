import { useContext } from 'react';
import FavoriteContext from '../context/favoritesContext';

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoNav =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <nav className="nav">
      <div className="navbar">
        <img alt="PokeApi" src={logoNav} className="navbar__logo" />
      </div>
      <div className="navbar-favorites">
        <span className="material-icons">favorite</span>
        {favoritePokemons.length}{' '}
      </div>
    </nav>
  );
};

export default Navbar;
