import CarList from 'components/CarList/CarList';
import Button from 'components/Button/Button';
import FilterBar from 'components/FilterBar/FilterBar';
import Section from 'components/Section/Section';
import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  return (
    <>
      <Section>
        <FilterBar />
        <CarList />
        <Button
          type="button"
          text="Load More"
          className={styles.buttonLoadMore}
        />
      </Section>
    </>
  );
};

export default CatalogPage;
