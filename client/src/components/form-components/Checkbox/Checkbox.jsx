// import { useState } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function CheckBox({ onChange, labelText, name, register, checked, ...rest }) {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <label htmlFor={name}>
      <span className={cl.checkbox}>
        <img
          src={checked ? '/svg/catalogPage/checkbox.svg' : '/svg/catalogPage/emptyCheckbox.svg'}
          alt={checked ? 'Checked' : 'Unchecked'}
        />
      </span>
      <p>
        {getTranslation(labelText)} <span>(0)</span>
      </p>
      <input id={name} className={cl.checkbox} {...register(name)} onChange={onChange} type="checkbox" {...rest} />
    </label>
  );
}
