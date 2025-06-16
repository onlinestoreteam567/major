import UncheckedCheckbox from '@assets/svg/Admin/UncheckedCheckbox/UncheckedCheckbox';
import cl from './index.module.scss';
import CheckedCheckbox from '@assets/svg/Admin/CheckedCheckbox/CheckedCheckbox';

export default function AdminCheckBox({ labelText, name, register, ...rest }) {
  return (
    <label htmlFor={name} className={`${cl.checkboxLabel}`}>
      <span className={cl.unchecked}>
        <UncheckedCheckbox />
      </span>
      <span className={cl.checked}>
        <CheckedCheckbox />
      </span>
      {labelText}
      <input id={name} type="checkbox" {...register(name)} {...rest} />
    </label>
  );
}
