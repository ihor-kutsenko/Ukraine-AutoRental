import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import notifyOptions from 'NotifyOptions/NotifyOptions';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'components/Button/Button';
import brands from '../../data/carsBrand';
import { selectCars } from 'redux/cars/carsSelectors';
import { setFilter } from 'redux/filter/filterSlice';

import styles from './FilterBar.module.scss';

const FilterBar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [selectedBrand, setSelectedBrand] = useState('Select brand');
  const [selectedPrice, setSelectedPrice] = useState('To $');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const handleSelectBrand = e => {
    setSelectedBrand(e.target.value);
  };

  const handleSelectPrice = e => {
    setSelectedPrice(e.target.value);
  };

  const rentalPrices = [];
  for (let i = 30; i <= 500; i += 10) {
    rentalPrices.push(i);
  }
  const formatMileage = value => {
    const cleanedValue = value.toString('en-US').replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };
  const handleMinInputChange = e => {
    let cleanedValue = e.target.value.replace(/[^0-9,]/g, '');
    if (cleanedValue.length > 7) {
      cleanedValue = cleanedValue.substring(0, 8);
    }
    setMinValue(cleanedValue);
  };

  const handleMaxInputChange = e => {
    let cleanedValue = e.target.value.replace(/[^0-9,]/g, '');
    if (cleanedValue.length > 7) {
      cleanedValue = cleanedValue.substring(0, 8);
    }
    setMaxValue(cleanedValue);
  };

  const handleFilterSubmit = e => {
    e.preventDefault();
    if (
      parseFloat(minValue.replace(',', '')) >
      parseFloat(maxValue.replace(',', ''))
    ) {
      toast.error(
        ` The first value must be less than or equal to the second value.`,
        notifyOptions
      );

      return;
    }

    const minMileage = parseFloat(minValue.replace(',', '')) || 0;
    const maxMileage = parseFloat(maxValue.replace(',', '')) || Infinity;

    let filteredByBrand = cars;
    if (selectedBrand !== 'Select brand') {
      filteredByBrand = cars.filter(car => car.make === selectedBrand);
    }

    let filteredByPrice = filteredByBrand;
    if (selectedPrice !== 'To $') {
      filteredByPrice = filteredByBrand.filter(
        car => parseFloat(car.rentalPrice.slice(1)) <= parseFloat(selectedPrice)
      );
    }

    const filteredByMileage = filteredByPrice.filter(car => {
      const mileage = car.mileage;
      return mileage >= minMileage && mileage <= maxMileage;
    });

    dispatch(setFilter([]));
    dispatch(setFilter(filteredByMileage));

    if (filteredByMileage.length === 0) {
      toast.info(
        `No cars found for the selected filters. Try different filters.`,
        notifyOptions
      );
    }
  };

  const handleClearForm = () => {
    setSelectedBrand('Select brand');
    setSelectedPrice('To $');
    setMinValue('');
    setMaxValue('');
    dispatch(setFilter([]));
  };

  useEffect(() => {
    dispatch(setFilter([]));
  }, [dispatch]);

  return (
    <form className={styles.form}>
      <div>
        <p className={styles.labelText}>Car brand</p>
        <select
          name="brands"
          className={styles.select}
          value={selectedBrand}
          onChange={handleSelectBrand}
        >
          <option value="" className={styles.option}>
            Select brand
          </option>
          {brands.map(brand => (
            <option key={brand} value={brand} className={styles.option}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className={styles.labelText}>Price/ 1 hour</p>
        <select
          name="price"
          value={selectedPrice}
          className={styles.newSelect}
          onChange={handleSelectPrice}
        >
          <option value="To $" className={styles.option}>
            To $
          </option>
          {rentalPrices.map(rentalPrice => (
            <option
              key={rentalPrice}
              value={rentalPrice}
              className={styles.option}
            >
              {rentalPrice} $
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className={styles.labelText}>Car mileage / km</p>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputLeft}
            value={formatMileage(minValue)}
            onChange={handleMinInputChange}
          />
          <span className={styles.spanLeft}>From: </span>
          <input
            type="text"
            className={styles.inputRight}
            value={formatMileage(maxValue)}
            onChange={handleMaxInputChange}
          />
          <span className={styles.spanRight}>To: </span>
        </div>
      </div>
      <Button
        text="Search"
        type="button"
        className={styles.buttonSearch}
        onClick={handleFilterSubmit}
      />
      <Button
        text="Clear filter"
        type="button"
        className={styles.buttonClear}
        onClick={handleClearForm}
      />
    </form>
  );
};

export default FilterBar;
