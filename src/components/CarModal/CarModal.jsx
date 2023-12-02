// import styles from './CarModal.module.scss';
import styles from '../CarItem/CarItem.module.scss';
import Button from 'components/Button/Button';

const CarModal = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
  } = car;
  const city = address.split(',')[1];
  const country = address.split(',')[2];
  return (
    <div>
      <img src={img} alt="" className={styles.i} />
      <div className={styles.modelInfo}>
        <span>{make} </span>
        <span className={styles.active}>{model}, </span>
        <span>{year}</span>
      </div>

      <div className={styles.secondInfo}>
        <div className={styles.secondInfo__wrapper}>
          <span className={styles.textInfo}>{city}</span>
          <span className={styles.textInfo}>{country}</span>
          <span className={styles.textInfo}>Id: {id}</span>
          <span className={styles.textInfo}>Year: {year}</span>
          <span className={styles.textInfo}>Type: {type}</span>
        </div>
        <div className={styles.secondInfo__wrapper}>
          <span className={styles.textInfo}>
            Fuel Consumption: {fuelConsumption}
          </span>
          <span className={styles.textInfo}>Engine Size: {engineSize}</span>
        </div>
      </div>
      <br />
      <p className={styles.a}>{description}</p>
      <br />
      <div className={styles.secondInfo}>
        <p className={styles.modelInfo}>Accessories and functionalities:</p>

        <div className={styles.secondInfo__wrapper}>
          <span className={styles.textInfo}>{accessories[1]}</span>
          <span className={styles.textInfo}>{accessories[2]}</span>
          <span className={styles.textInfo}>{accessories[3]}</span>
        </div>

        <div className={styles.secondInfo__wrapper}>
          <span className={styles.textInfo}>{functionalities[1]}</span>
          <span className={styles.textInfo}>{functionalities[2]}</span>
          <span className={styles.textInfo}>{functionalities[3]}</span>
        </div>
      </div>
      <div className={styles.rentalConditions}>
        <p>Rental Conditions: :</p>
        <div className={styles.accessories__wrapper}>
          <span className={styles.textInfo}>{rentalConditions}</span>
        </div>
        <div className={styles.accessories__wrapper}>
          <span className={styles.textInfo}>Mileage: {mileage}</span>
          <span className={styles.textInfo}>Price: {rentalPrice}</span>
        </div>
      </div>
      <Button text="Rental car" type="button" className={styles.button} />
    </div>
  );
};

export default CarModal;
