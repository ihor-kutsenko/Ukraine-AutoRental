import CarList from 'components/CarList/CarList';
import Button from 'components/Button/Button';
import styles from '../../components/CarItem/CarItem.module.scss';

const CatalogPage = () => {
  return (
    <>
      <div>
        <CarList />
        <Button type="button" text="Load More" className={styles.button} />
      </div>
    </>
  );
};

export default CatalogPage;
