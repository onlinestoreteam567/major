import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import Heading from '@components/UI/Heading/Heading';

const Slide = ({ labelText, title, slideClassName }) => {
  return (
    <div className={`${cl.slide} ${cl[slideClassName]}`}>
      <section>
        <div className={cl.label}>{labelText}</div>
        <Heading type="h1">{title}</Heading>
        <Button variant="banner">Додати до кошику</Button>
      </section>
    </div>
  );
};

export default Slide;
