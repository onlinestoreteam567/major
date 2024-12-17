import cl from './index.module.scss';

const Switch = ({ labelText, name, watch, register, ...rest }) => {
  const checked = watch(name);

  return (
    <label htmlFor={name} className={cl.switch}>
      <p>
        {labelText} <span>(0)</span>
      </p>
      <input type="checkbox" id={name} {...register(name)} checked={checked} {...rest} />
      <span className={cl.slider}>
        <img
          src={checked ? '/svg/catalogPage/check.svg' : '/svg/catalogPage/uncheck.svg'}
          alt={checked ? 'Checked' : 'Unchecked'}
        />
      </span>
    </label>
  );
};

export default Switch;
