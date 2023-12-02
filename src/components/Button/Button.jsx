import PropTypes from 'prop-types';

const Button = ({ text, className, type, onClick, href }) => {
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {text}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
};
