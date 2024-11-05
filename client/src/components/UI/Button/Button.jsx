import cl from './index.module.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, variant = 'primary', purpose = 'default', onMouseEnter, onMouseLeave }) => {
  return (
    <button
      className={`${cl.button} ${cl[variant]} ${cl[purpose]}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  purpose: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Button;
