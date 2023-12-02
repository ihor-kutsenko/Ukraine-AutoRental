import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
