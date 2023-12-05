import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarList from 'components/CarList/CarList';
import Button from 'components/Button/Button';
import FilterBar from 'components/FilterBar/FilterBar';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';

import { selectCars, selectIsLoading } from 'redux/cars/carsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { setFilter } from 'redux/filter/filterSlice';
import { fetchCars } from 'redux/cars/carsOperations';

import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const [isShowBtn, setIsShowBtn] = useState(true);
  const [page, setPage] = useState(12);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    page >= cars.length || cars.length < 13
      ? setIsShowBtn(false)
      : setIsShowBtn(true);
  }, [page, cars.length]);

  useEffect(() => {
    dispatch(setFilter(filteredCars));
  }, [filteredCars, dispatch]);

  const renderCarList = () => {
    if (filteredCars.length > 0) {
      return <CarList cars={filteredCars} />;
    } else {
      return <CarList cars={cars.slice(0, page)} />;
    }
  };

  const loadMore = () => {
    setPage(prev => prev + 12);
  };

  return (
    <>
      <Section>
        <FilterBar />
        {isLoading && <Loader />}
        {renderCarList()}
        {isShowBtn && (
          <Button
            type="button"
            text="Load More"
            className={styles.buttonLoadMore}
            onClick={loadMore}
          />
        )}
      </Section>
    </>
  );
};

export default CatalogPage;
