import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import AccentText from '@UI/Texts/AccentText/AccentText';

const Slide = ({ labelText, title, slideClassName }) => {
  return (
    <div className={`${cl.slide} ${cl[slideClassName]}`}>
      <section className={cl.mainSection}>
        <div className={cl.label}>
          <AccentText>{labelText}</AccentText>
        </div>
        <div className={cl.bottomWrapper}>
          <Heading type="h1">{title}</Heading>
          <Button variant="banner">Додати до кошику</Button>
        </div>
      </section>
    </div>
  );
};

export default Slide;
