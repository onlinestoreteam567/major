import cl from './index.module.scss';
import cards from './cards_of_category.json';
import Heading from '@components/UI/Texts/Heading/Heading';
import { mainSettings } from '@components/constants/settingSlider';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';

export default function ProductOffer({ card }) {
  const arrOffer = cards.filter((item) => item.id !== card.id);

  return (
    <div className={cl.wrapProductOffer}>
      <Heading type="h2">Вас можуть зацікавити</Heading>
      <SliderBoxMain slidesData={arrOffer} settings={mainSettings} />
    </div>
  );
}
