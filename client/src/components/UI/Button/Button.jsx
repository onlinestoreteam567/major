import cl from './index.module.scss';

export default function Button({
  onClick,
  children,
  variant = 'primary',
  purpose = 'default',
  onMouseEnter,
  onMouseLeave,
  ariaLabel,
  disabled,
}) {
  const handleClick = (e) => onClick(e);

  return (
    <button
      className={`${cl.button} ${cl[variant]} ${cl[purpose]}`}
      type="button"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
