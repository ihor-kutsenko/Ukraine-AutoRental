import CarItem from 'components/CarItem/CarItem';
import cars from '../../data/carsAdverts';
import styles from './CarList.module.scss';
const CarList = () => {
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
