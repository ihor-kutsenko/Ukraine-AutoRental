import { CirclesWithBar } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <CirclesWithBar
        height="100"
        width="100"
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#3470ff"
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};
export default Loader;
