import cl from './index.module.scss';

export default function InputTextArea({ label, register, name, errors, placeholder }) {
  return (
    <label className={cl.labelTa}>
      <p>
        {label} <span>*</span>
      </p>
      <textarea placeholder={placeholder} {...register(name)} className={cl.fieldTa}></textarea>
      <p className={cl.error}>{errors?.[name]?.message}</p>
    </label>
  );
}
