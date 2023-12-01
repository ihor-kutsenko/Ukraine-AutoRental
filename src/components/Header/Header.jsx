import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, CATALOG_ROUTE, FAVORITES_ROUTE } from 'routes/routes';

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
      <NavLink to={HOME_ROUTE}> Logo</NavLink>
      <nav
        style={{
          display: 'flex',

          gap: '15px',
        }}
      >
        <NavLink to={HOME_ROUTE}>Home</NavLink>
        <NavLink to={CATALOG_ROUTE}>Catalog</NavLink>
        <NavLink to={FAVORITES_ROUTE}>Favorites</NavLink>
      </nav>
    </div>
  );
};

export default Header;
