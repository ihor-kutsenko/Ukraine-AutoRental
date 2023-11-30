import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className={styles.main_container}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
