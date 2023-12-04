import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarList from 'components/CarList/CarList';
import Button from 'components/Button/Button';
import FilterBar from 'components/FilterBar/FilterBar';
import Section from 'components/Section/Section';

import { setCatalogCars } from '../../redux/cars/CarsSlice';
import { selectCars } from 'redux/cars/carsSelectors';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';

import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilter);

  useEffect(() => {
    dispatch(setCatalogCars(cars));
  }, [dispatch, cars]);

  useEffect(() => {
    dispatch(setFilter(filteredCars));
  }, [filteredCars, dispatch]);

  const renderCarList = () => {
    if (filteredCars.length > 0) {
      return <CarList cars={filteredCars} />;
    } else {
      return <CarList cars={cars} />;
    }
  };

  return (
    <>
      <Section>
        <FilterBar />
        {renderCarList()}
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
