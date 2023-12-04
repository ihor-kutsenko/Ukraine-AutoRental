import { NavLink, Link } from 'react-router-dom';
import { HOME_ROUTE, CATALOG_ROUTE, FAVORITES_ROUTE } from 'routes/routes';
import logo from '../../images/logo-1.png';

import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={HOME_ROUTE}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <nav>
        <NavLink
          to={HOME_ROUTE}
          className={({ isActive }) => `${isActive ? styles.active : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to={CATALOG_ROUTE}
          className={({ isActive }) => `${isActive ? styles.active : ''}`}
        >
          Catalog
        </NavLink>
        <NavLink
          to={FAVORITES_ROUTE}
          className={({ isActive }) => `${isActive ? styles.active : ''}`}
        >
          Favorites
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
