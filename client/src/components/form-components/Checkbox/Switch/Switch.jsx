import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

const Switch = ({ labelText, name, watch, register, img, ...rest }) => {
  const checked = watch(name);

  return (
    <div className={cl.switchWrapper}>
      <img src={img} alt="" />
      <Heading type="h4">{labelText}</Heading>
      <label htmlFor={name} className={cl.switch}>
        <input type="checkbox" id={name} {...register(name)} checked={checked} {...rest} />
        <span className={cl.slider}>
          <img
            src={checked ? '/svg/catalogPage/check.svg' : '/svg/catalogPage/uncheck.svg'}
            alt={checked ? 'Checked' : 'Unchecked'}
          />
        </span>
      </label>
    </div>
  );
};

export default Switch;
