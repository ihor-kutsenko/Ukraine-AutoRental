import { NavLink } from 'react-router-dom';
import { CATALOG_ROUTE } from 'routes/routes';

import HomeGallery from 'components/HomeGallery/HomeGallery';
import Section from 'components/Section/Section';

import styles from './HomePage.module.scss';
import Button from 'components/Button/Button';
const HomePage = () => {
  return (
    <>
      <Section>
        <h1 className={styles.title}>
          Let's share the joy of travel: Rent a car in Ukraine with our reliable
          cars!
        </h1>
        <NavLink to={CATALOG_ROUTE}>
          <Button text="Rent car" className={styles.button} />
        </NavLink>

        <HomeGallery />
      </Section>
    </>
  );
};

export default HomePage;
