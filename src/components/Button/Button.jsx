import PropTypes from 'prop-types';

const Button = ({ text, className, type }) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};
