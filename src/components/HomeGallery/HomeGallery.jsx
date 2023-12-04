import audi from '../../images/logo/audi-logo.png';
import bmw from '../../images/logo/bmw-logo.png';
import citroen from '../../images/logo/citroen-logo.png';
import ford from '../../images/logo/ford-logo.png';
import hyundai from '../../images/logo/hyundai-logo.png';
import jaguar from '../../images/logo/jaguar-logo.png';
import kia from '../../images/logo/kia-logo.png';
import landRover from '../../images/logo/land-rover-logo.png';
import lexus from '../../images/logo/lexus-logo.png';
import mazda from '../../images/logo/mazda-logo.png';
import mercedesBenz from '../../images/logo/mercedes-benz-logo.png';
import nissan from '../../images/logo/nissan-logo.png';
import opel from '../../images/logo/opel-logo.png';
import renault from '../../images/logo/renault-logo.png';
import seat from '../../images/logo/seat-logo.png';
import skoda from '../../images/logo/skoda-logo.png';
import toyota from '../../images/logo/toyota-logo.png';
import volkswagen from '../../images/logo/volkswagen-logo.png';
import volvo from '../../images/logo/volvo-logo.png';

import styles from './HomeGallery.module.scss';
const HomeGallery = () => {
  return (
    <ul className={styles.list}>
      <li>
        <img src={audi} alt="audi" />
        <p>Audi</p>
      </li>
      <li>
        <img src={bmw} alt="bmw" />
        <p>BMW</p>
      </li>
      <li>
        <img src={citroen} alt="citroen" />
        <p>Citroen</p>
      </li>
      <li>
        <img src={ford} alt="ford" />
        <p>Ford</p>
      </li>
      <li>
        <img src={hyundai} alt="hyundai" />
        <p>Hyundai</p>
      </li>
      <li>
        <img src={jaguar} alt="jaguar" />
        <p>Jaguar</p>
      </li>
      <li>
        <img src={kia} alt="kia" />
        <p>KiA</p>
      </li>
      <li>
        <img src={landRover} alt="land-rover" />
        <p>Land-Rover</p>
      </li>
      <li>
        <img src={lexus} alt="lexus" />
        <p>Lexus</p>
      </li>
      <li>
        <img src={mazda} alt="mazda" />
        <p>Mazda</p>
      </li>
      <li>
        <img src={mercedesBenz} alt="mercedes-benz" />
        <p>Mercedes-Benz</p>
      </li>
      <li>
        <img src={nissan} alt="nissan" />
        <p>Nissan</p>
      </li>
      <li>
        <img src={opel} alt="opel" />
        <p>Opel</p>
      </li>
      <li>
        <img src={renault} alt="renault" />
        <p>Renault</p>
      </li>
      <li>
        <img src={seat} alt="seat" />
        <p>Seat</p>
      </li>
      <li>
        <img src={skoda} alt="skoda" />
        <p>Skoda</p>
      </li>
      <li>
        <img src={toyota} alt="toyota" />
        <p>Toyota</p>
      </li>
      <li>
        <img src={volkswagen} alt="volkswagen" />
        <p>Volkswagen</p>
      </li>
      <li>
        <img src={volvo} alt="volvo" />
        <p>Volvo</p>
      </li>
    </ul>
  );
};

export default HomeGallery;
