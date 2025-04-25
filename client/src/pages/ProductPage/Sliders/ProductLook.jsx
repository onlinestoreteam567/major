import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import cards from './cards_one.json';

export default function ProductLook() {
  return (
    <div className={cl.slider}>
      <Heading type="h2">Ви переглядали</Heading>
      <SliderBoxMain slidesData={cards} />
    </div>
  );
}
