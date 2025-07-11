import cl from './index.module.scss';

export default function Button({
  onClick,
  children,
  variant = 'primary',
  purpose = 'default',
  onMouseEnter,
  onMouseLeave,
  ariaLabel,
}) {
  const handleClick = (e) => onClick && onClick(e);
  return (
    <button
      className={`${cl.button} ${cl[variant]} ${cl[purpose]}`}
      type="button"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
