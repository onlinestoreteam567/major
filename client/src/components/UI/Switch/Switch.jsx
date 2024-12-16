import cl from './index.module.scss';

const Switch = ({ onChange, labelText, name, register, checked, ...rest }) => {
  return (
    <label htmlFor={name}>
      <p>
        {labelText} <span>(0)</span>
      </p>
      <input type="checkbox" id={name} {...register(name)} checked={checked} onChange={onChange} {...rest} />
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
