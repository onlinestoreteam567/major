import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useState } from 'react';
import Circle from './Circle';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';

const CoopertaionOfferCards = ({ setIsShowCooperationPopUp }) => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const [mobileCardIndex, setMobileCardIndex] = useState(1);
  const isLargeScreen = tablet || deskmin || deskmax;

  const { getTranslation } = useTranslationNamespace('');

  const firstMobileMinImagePath = '/images/cooperation/cooperationOfferFirstMobileMin.webp';
  const firstMobileMaxImagePath = '/images/cooperation/cooperationOfferFirstMobileMax.webp';
  const firstTabletImagePath = '/images/cooperation/cooperationOfferFirstTablet.webp';
  const firstDeskImagePath = '/images/cooperation/cooperationOfferFirstDesk.webp';

  const secondMobileMinImagePath = '/images/cooperation/cooperationOfferSecondMobileMin.webp';
  const secondMobileMaxImagePath = '/images/cooperation/cooperationOfferSecondMobileMax.webp';
  const secondTabletImagePath = '/images/cooperation/cooperationOfferSecondTablet.webp';
  const secondDeskImagePath = '/images/cooperation/cooperationOfferSecondDesk.webp';

  return (
    <>
      {(mobileCardIndex === 1 || isLargeScreen) && (
        <li className={cl.coopertaionOfferCard}>
          <picture>
            <source srcSet={firstDeskImagePath} media="(min-width: 1024px)" />
            <source srcSet={firstTabletImagePath} media="(min-width: 768px)" />
            <source srcSet={firstMobileMaxImagePath} media="(min-width: 380px)" />
            <img src={firstMobileMinImagePath} alt={getTranslation('imgAlt')} />
          </picture>
          <Heading type="h2">Дропшипінг</Heading>
          <ul>
            <li>
              <Paragraph type="body1">Мінімальні початкові інвестиції: без потреби закупівлі запасів</Paragraph>
            </li>
            <li>
              <Paragraph type="body1">
                Широкий асортимент товарів: Можна продавати товари з різних категорій без необхідності їх зберігання
              </Paragraph>
            </li>
            <li>
              <Paragraph type="body1">Гнучкість: Можна працювати з будь-якого місця, де є доступ до інтернет</Paragraph>
            </li>
          </ul>
          <Button onClick={() => setIsShowCooperationPopUp(true)}>Подати заявку</Button>

          {!isLargeScreen && (
            <div>
              <button onClick={() => setMobileCardIndex(1)}>
                <Circle fillColor="#22211F" />
              </button>
              <button onClick={() => setMobileCardIndex(2)}>
                <Circle fillColor="#A2A2A2" />
              </button>
            </div>
          )}
        </li>
      )}

      {(mobileCardIndex === 2 || isLargeScreen) && (
        <li className={cl.coopertaionOfferCard}>
          <picture>
            <source srcSet={secondDeskImagePath} media="(min-width: 1024px)" />
            <source srcSet={secondTabletImagePath} media="(min-width: 768px)" />
            <source srcSet={secondMobileMaxImagePath} media="(min-width: 380px)" />
            <img src={secondMobileMinImagePath} alt={getTranslation('imgAlt')} />
          </picture>
          <Heading type="h2">Гурт для майстрів</Heading>
          <ul>
            <li>
              <Paragraph type="body1">
                Спеціальні бізнес-ціни: оптимальні обсяги замовлення для кожного формату — від навчальних курсів до
                салонної мережі
              </Paragraph>
            </li>
            <li>
              <Paragraph type="body1">Гнучка логістика: пріоритетна обробка замовлень, регулярні поставки </Paragraph>
            </li>
            <li>
              <Paragraph type="body1">
                Програма лояльності та знижки: накопичувальні бонуси за обсяги та ранній доступ до новинок.
              </Paragraph>
            </li>
          </ul>
          <Button onClick={() => setIsShowCooperationPopUp(true)}>Подати заявку</Button>

          {!isLargeScreen && (
            <div>
              <button onClick={() => setMobileCardIndex(1)}>
                <Circle fillColor="#A2A2A2" />
              </button>
              <button onClick={() => setMobileCardIndex(2)}>
                <Circle fillColor="#22211F" />
              </button>
            </div>
          )}
        </li>
      )}
    </>
  );
};
export default CoopertaionOfferCards;
