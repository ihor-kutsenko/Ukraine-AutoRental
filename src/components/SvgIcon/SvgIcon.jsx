import PropTypes from 'prop-types';
import sprite from '../../images/sprite.svg';

const SvgIcon = ({ className, iconId, onClick }) => {
  return (
    <svg className={className} preserveAspectRatio="none" onClick={onClick}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

export default SvgIcon;

SvgIcon.propTypes = {
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
