import cl from './index.module.scss';
import InputMask from 'react-input-mask';

export default function InputPhone({ label, name, errors, inputRef, onChange }) {
  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   onChange(value);
  // };

  return (
    <label htmlFor={name} className={cl.labelIt}>
      <p>
        {label} <span>*</span>
      </p>
      <InputMask
        name={name}
        mask="+38\(999)-999-9999"
        placeholder="+38(0XX)-XXX-XXXX"
        inputRef={inputRef}
        onChange={onChange}
      />
      <p className={cl.error}>{errors?.[name]?.message}</p>
    </label>
  );
}
