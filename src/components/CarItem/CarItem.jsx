import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button/Button';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import Modal from 'components/Modal/Modal';
import defaultImg from '../../images/car7.jpeg';

import {
  addToFavorites,
  deleteFromFavorites,
} from 'redux/favorites/favoritesSlice';
import { selectFavorites } from 'redux/favorites/favoritesSelectors';

import styles from './CarItem.module.scss';

const CarItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavorites);

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

  const imageUrl = img || defaultImg;

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

  const handleToggleFavorite = car => {
    if (!favoriteCars.some(item => item.id === car.id)) {
      dispatch(addToFavorites(car));
    } else {
      dispatch(deleteFromFavorites(car));
    }
  };

  return (
    <>
      <li key={id} className={styles.listItem}>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <img src={imageUrl} alt="car" className={styles.img} />
            <button
              type="button"
              className={styles.buttonSvg}
              onClick={() => handleToggleFavorite(car)}
            >
              {favoriteCars.some(item => item.id === car.id) ? (
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
