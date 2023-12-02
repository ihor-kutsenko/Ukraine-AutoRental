import { useState } from 'react';

import Button from 'components/Button/Button';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import Modal from 'components/Modal/Modal';
import styles from './CarItem.module.scss';

const CarItem = ({ car }) => {
  const [favorites, setFavorites] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
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
    <>
      <li key={id} className={styles.listItem}>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <img src={img} alt="" className={styles.img} />
            <button
              type="button"
              className={styles.buttonSvg}
              onClick={() => {
                setFavorites(!favorites);
              }}
            >
              {favorites ? (
                <SvgIcon
                  className={styles.iconHeart}
                  iconId={'icon-heart-active'}
                />
              ) : (
                <SvgIcon className={styles.iconHeart} iconId={'icon-heart'} />
              )}
            </button>
          </div>
          <div className={styles.mainInfo}>
            <div className={styles.modelInfo}>
              <span>{make} </span>
              <span className={styles.active}>{model}, </span>
              <span>{year}</span>
            </div>
            <span>{rentalPrice}</span>
          </div>
          <div className={styles.secondInfo}>
            <div className={styles.secondInfo__wrapper}>
              <span className={styles.textInfo}>{city}</span>
              <span className={styles.textInfo}>{country}</span>
              <span className={styles.textInfo}>{rentalCompany}</span>
              <span>Premium</span>
            </div>
            <div className={styles.secondInfo__wrapper}>
              <span className={styles.textInfo}>{type}</span>
              <span className={styles.textInfo}>{make}</span>
              <span className={styles.textInfo}>{id}</span>
              <span>{getAccessoriesText()}</span>
            </div>
          </div>
        </div>{' '}
        <Button
          text="Learn More"
          type="button"
          className={styles.button}
          onClick={toggleModal}
        />
        {showModal && <Modal onClose={toggleModal} car={car} />}
      </li>
    </>
  );
};

export default CarItem;
