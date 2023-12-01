import CarItem from 'components/CarItem/CarItem';
import cars from '../../data/carsAdverts';

const CarList = () => {
  return (
    <div>
      <ul>
        {cars.map(car => (
          <CarItem car={car} key={car.id} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
