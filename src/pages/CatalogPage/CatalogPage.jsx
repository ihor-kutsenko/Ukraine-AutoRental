import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarList from 'components/CarList/CarList';
import Button from 'components/Button/Button';
import FilterBar from 'components/FilterBar/FilterBar';
import Section from 'components/Section/Section';

import { setCatalogCars } from '../../redux/cars/CarsSlice';
import { selectCars } from 'redux/cars/carsSelectors';

import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(setCatalogCars(cars));
  }, [dispatch, cars]);

  return (
    <>
      <Section>
        <FilterBar />
        <CarList cars={cars} />
        <Button
          type="button"
          text="Load More"
          className={styles.buttonLoadMore}
        />
      </Section>
    </>
  );
};

export default CatalogPage;
