import cl from './index.module.scss';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  children,
  variant = 'primary',
  purpose = 'default',
  onMouseEnter,
  onMouseLeave,
  submit,
}) => {
  const handleClick = (e) => {
    // If it's a submit button, let the form handle the submission
    if (submit) return;

    // Otherwise, execute the onClick handler
    if (onClick) onClick(e);
  };

  return (
    <button
      className={`${cl.button} ${cl[variant]} ${cl[purpose]}`}
      type={submit ? 'submit' : 'button'}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  purpose: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Button;
