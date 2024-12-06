import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import cards from './cards_of_category.json';

export default function ProductSet() {
  return (
    <div className={cl.wrapProductOffer}>
      <Heading type="h2">Разом дешевше</Heading>
      <SliderBoxMain slidesData={cards} />
    </div>
  );
}
