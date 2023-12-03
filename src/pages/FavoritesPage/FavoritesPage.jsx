// import { useState } from 'react';
import { useSelector } from 'react-redux';

import CarItem from 'components/CarItem/CarItem';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { selectFavorites } from 'redux/favorites/favoritesSelectors';

import styles from './FavoritePages.module.scss';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorites);
  return (
    <>
      <Container>
        <Section>
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
