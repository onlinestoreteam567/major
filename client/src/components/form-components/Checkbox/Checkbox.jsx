import { useState } from 'react';
import cl from './index.module.scss';

export default function CheckBox({ onChange, labelText, name, register, ...rest }) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div>
      <span className={cl.checkbox}>
        <img
          src={checked ? '/svg/catalogPage/checkbox.svg' : '/svg/catalogPage/emptyCheckbox.svg'}
          alt={checked ? 'Checked' : 'Unchecked'}
        />
      </span>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        className={cl.checkbox}
        {...register(name)}
        checked={checked}
        onChange={handleToggle}
        {...rest}
      />
    </div>
  );
}
