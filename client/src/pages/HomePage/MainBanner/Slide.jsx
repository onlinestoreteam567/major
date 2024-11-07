import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import H1 from '@components/UI/Hs/H1/H1';

const Slide = ({ labelText, title, slideClassName }) => {
  return (
    <div className={`${cl.slide} ${cl[slideClassName]}`}>
      <section>
        <div className={cl.label}>{labelText}</div>
        <H1>{title}</H1>
        <Button variant="banner">Додати до кошику</Button>
      </section>
    </div>
  );
};

export default Slide;
