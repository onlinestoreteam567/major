import cl from './index.module.scss';

export default function InputName({ label, register, name, errors, placeholder }) {
  return (
    <label htmlFor={name} className={cl.labelIt}>
      <p>
        {label} <span>*</span>
      </p>
      <input autoFocus name={name} type="text" placeholder={placeholder} {...register(name)} />
      <p className={cl.error}>{errors?.[name]?.message}</p>
    </label>
  );
}
