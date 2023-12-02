import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import CarModal from 'components/CarModal/CarModal';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, car }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
      document.body.style.overflow = 'visible';
    }
  };
  document.body.style.overflow = 'hidden';

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <button className={styles.button} type="button" onClick={onClose}>
          <SvgIcon className={styles.iconClose} iconId={'icon-close'} />
        </button>
        <CarModal car={car} />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
