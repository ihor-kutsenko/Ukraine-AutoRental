import styles from './CarModal.module.scss';
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

  const rentalCondition = rentalConditions.split('\n');
  const minAge = rentalCondition[0].split(': ');
  const price = parseInt(rentalPrice.replace(/\D/g, ''), 10);
  const formattedMileage = mileage.toLocaleString('en-US');

  return (
    <div>
      <img src={img} alt="car" className={styles.imgModal} />
      <div className={styles.modelInfo}>
        <span>{make} </span>
        <span className={styles.active}>{model}, </span>
        <span>{year}</span>
      </div>

      <div className={styles.supportText}>
        <div>
          <span className={styles.textInfo}>{city}</span>
          <span className={styles.textInfo}>{country}</span>
          <span className={styles.textInfo}>Id: {id}</span>
          <span className={styles.textInfo}>Year: {year}</span>
          <span>Type: {type}</span>
        </div>
        <div>
          <span className={styles.textInfo}>
            Fuel Consumption: {fuelConsumption}
          </span>
          <span>Engine Size: {engineSize}</span>
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.accessoriesWrapper}>
        <p className={styles.accessoriesTitle}>
          Accessories and functionalities:
        </p>

        <div className={styles.accessoriesText}>
          <div>
            <span className={styles.textInfo}>{accessories[0]}</span>
            <span className={styles.textInfo}>{accessories[1]}</span>
            <span>{accessories[2]}</span>
          </div>

          <div>
            <span className={styles.textInfo}>{functionalities[0]}</span>
            <span className={styles.textInfo}>{functionalities[1]}</span>
            <span>{functionalities[2]}</span>
          </div>
        </div>
      </div>

      <div className={styles.rentalWrapper}>
        <p className={styles.rentalTitle}>Rental Conditions: :</p>

        <div className={styles.rentalTextWrapper}>
          <p className={styles.rentalText}>
            Minimum age : <span className={styles.activeText}>{minAge[1]}</span>
          </p>
          <p className={styles.rentalText}>{rentalCondition[1]}</p>
        </div>

        <div className={styles.rentalTextWrapper}>
          <p className={styles.rentalText}>{rentalCondition[2]}</p>
          <p className={styles.rentalText}>
            Mileage:{' '}
            <span className={styles.activeText}>{formattedMileage}</span>
          </p>
          <p className={styles.rentalText}>
            Price: <span className={styles.activeText}>{price}$</span>
          </p>
        </div>
      </div>
      <Button
        text="Rental car"
        type="button"
        href="tel:+380730000000"
        className={styles.button}
      />
    </div>
  );
};

export default CarModal;
