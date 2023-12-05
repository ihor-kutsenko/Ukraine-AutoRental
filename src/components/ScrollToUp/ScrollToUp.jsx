import styles from './ScrollToUp.module.scss';
import ScrollToTop from 'react-scroll-up';
import { RxThickArrowUp } from 'react-icons/rx';
import scrollToTopStyle from './ScrollToTop';

const ScrollToUp = () => {
  return (
    <>
      <ScrollToTop showUnder={120} style={scrollToTopStyle}>
        <div className={styles.scrollWrapper}>
          <RxThickArrowUp size="28" strokeWidth="0.2px" />
        </div>
      </ScrollToTop>
    </>
  );
};
export default ScrollToUp;
