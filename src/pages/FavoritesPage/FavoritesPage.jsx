import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { CATALOG_ROUTE } from 'routes/routes';

import CarItem from 'components/CarItem/CarItem';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

import { selectFavorites } from 'redux/favorites/favoritesSelectors';

import styles from './FavoritesPages.module.scss';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorites);
  return (
    <>
      <Container>
        <Section>
          {favoriteCars && favoriteCars.length === 0 && (
            <>
              <h2 className={styles.title}>
                The list of favorite cars is empty. Choose your favorite cars
              </h2>
              <NavLink to={CATALOG_ROUTE}>
                <Button text="Rent car" className={styles.button} />
              </NavLink>
            </>
          )}

          <ul className={styles.list}>
            {favoriteCars.map(car => (
              <CarItem car={car} key={car.id} />
            ))}
          </ul>
        </Section>
      </Container>
    </>
  );
};

export default FavoritesPage;
