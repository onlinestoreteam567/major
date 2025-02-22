import cl from './index.module.scss';

export default function BtnSubmit({ children, variant = 'primary', purpose = 'default' }) {
  return (
    <button className={`${cl.button} ${cl[variant]} ${cl[purpose]}`} type="submit">
      {children}
    </button>
  );
}
