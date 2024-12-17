import cl from './index.module.scss';

export default function CheckBox({ labelText, name, register, watch, ...rest }) {
  const checked = watch(name);

  return (
    <label htmlFor={name} className={cl.checkboxLabel}>
      <span className={cl.checkbox}>
        <img
          src={checked ? '/svg/catalogPage/checkbox.svg' : '/svg/catalogPage/emptyCheckbox.svg'}
          alt={checked ? 'Checked' : 'Unchecked'}
        />
      </span>
      <p>
        {labelText} <span>(0)</span>
      </p>
      <input id={name} className={cl.checkbox} type="checkbox" {...register(name)} {...rest} />
    </label>
  );
}
