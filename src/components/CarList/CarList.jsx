import CarItem from 'components/CarItem/CarItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCatalogCars } from '../../redux/cars/CarsSlice';
import styles from './CarList.module.scss';

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.cars);

  useEffect(() => {
    dispatch(setCatalogCars(cars));
  }, [dispatch, cars]);

  return (
    <div>
      <ul className={styles.list}>
        {cars.map(car => (
          <CarItem car={car} key={car.id} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
