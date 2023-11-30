import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '15px',
        marginBottom: '20px',
      }}
    >
      <NavLink to="/"> Logo</NavLink>
      <nav
        style={{
          display: 'flex',

          gap: '15px',
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </div>
  );
};

export default Header;
