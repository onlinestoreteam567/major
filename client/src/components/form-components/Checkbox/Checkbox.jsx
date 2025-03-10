import cl from './index.module.scss';

export default function CheckBox({ labelText, name, register, ...rest }) {
  return (
    <label htmlFor={name} className={cl.checkboxLabel}>
      <input id={name} className={cl.checkbox} type="checkbox" {...register(name)} {...rest} />
      <span />
      <p>
        {labelText} <span>(0)</span>
      </p>
    </label>
  );
}
