import cl from './index.module.scss';

export default function BtnSubmit({ children, disabled, variant = 'primary', purpose = 'default' }) {
  return (
    <button disabled={disabled} className={`${cl.button} ${cl[variant]} ${cl[purpose]}`} type="submit">
      {children}
    </button>
  );
}
