import Button from '@UI/Button/Button';
import cl from './index.module.scss';

const Slide = ({ labelText, title, slideClassName }) => {
  return (
    <div className={`${cl.slide} ${cl[slideClassName]}`}>
      <section>
        <div className={cl.label}>{labelText}</div>
        <h1>{title}</h1>
        <div className={cl.buttonWrapper}>
          <Button variant="banner">Додати до кошику</Button>
        </div>
      </section>
    </div>
  );
};

export default Slide;
