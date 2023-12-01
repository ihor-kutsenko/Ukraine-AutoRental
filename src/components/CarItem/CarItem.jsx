import Button from 'components/Button/Button';
import styles from './CarItem.module.scss';

const CarItem = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const getAccessoriesText = () => {
    switch (true) {
      case accessories[1].includes('audio'):
        return 'Audio System';
      case accessories[1].includes('system'):
        return 'Sound System';
      default:
        return accessories[1];
    }
  };

  return (
    <li key={id}>
      <div className={styles.wrapper}>
        <img src={`${img}`} alt="" className={styles.img} />
        <div className={styles.mainInfo}>
          <div>
            <span>{make} </span>
            <span>{model}, </span>
            <span>{year}</span>
          </div>
          <span>{rentalPrice}</span>
        </div>
        <div className={styles.secondInfo}>
          <div>
            <span>{city} </span>
            <span>{country} </span>
            <span>{rentalCompany} </span>
            <span>Premium</span>
          </div>
          <div>
            <span>{type} </span>
            <span>{make} </span>
            <span>{id} </span>
            <span>{getAccessoriesText()}</span>
          </div>
        </div>
        <Button text="Learn More" className={styles.button} />
      </div>
    </li>
  );
};

export default CarItem;
