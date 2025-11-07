import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useState } from 'react';
import Circle from './Circle';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';

const CoopertaionOfferCards = ({ setIsShowCooperationPopUp }) => {
  const { getTranslation } = useTranslationNamespace('cooperationPage');
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const [mobileCardIndex, setMobileCardIndex] = useState(1);
  const isLargeScreen = tablet || deskmin || deskmax;

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
        <div className={cl.coopertaionOfferCard}>
          <picture>
            <source srcSet={firstDeskImagePath} media="(min-width: 1024px)" />
            <source srcSet={firstTabletImagePath} media="(min-width: 768px)" />
            <source srcSet={firstMobileMaxImagePath} media="(min-width: 380px)" />
            <img src={firstMobileMinImagePath} alt={getTranslation('cooperationOfferFirstImageAlt')} />
          </picture>
          <Heading type="h2">{getTranslation('cooperationOfferFirstCardTitle')}</Heading>
          <ul>
            <li>
              <Paragraph type="body1">{getTranslation('cooperationOfferFirstCardListItem1')}</Paragraph>
            </li>
            <li>
              <Paragraph type="body1">{getTranslation('cooperationOfferFirstCardListItem2')}</Paragraph>
            </li>
            <li>
              <Paragraph type="body1">{getTranslation('cooperationOfferFirstCardListItem3')}</Paragraph>
            </li>
          </ul>
          <Button
            ariaLabel={getTranslation('cooperationOfferCardButtonText')}
            onClick={() => setIsShowCooperationPopUp(true)}
          >
            {getTranslation('cooperationOfferCardButtonText')}
          </Button>
          {!isLargeScreen && (
            <div>
              <button
                aria-label={getTranslation('cooperationOfferCardButton2AriaLabel')}
                onClick={() => setMobileCardIndex(1)}
              >
                <Circle fillColor="#22211F" />
              </button>
              <button
                aria-label={getTranslation('cooperationOfferCardButton1AriaLabel')}
                onClick={() => setMobileCardIndex(2)}
              >
                <Circle fillColor="#A2A2A2" />
              </button>
            </div>
          )}
        </div>
      )}

      {(mobileCardIndex === 2 || isLargeScreen) && (
        <div className={cl.coopertaionOfferCard}>
          <picture>
            <source srcSet={secondDeskImagePath} media="(min-width: 1024px)" />
            <source srcSet={secondTabletImagePath} media="(min-width: 768px)" />
            <source srcSet={secondMobileMaxImagePath} media="(min-width: 380px)" />
            <img src={secondMobileMinImagePath} alt={getTranslation('cooperationOfferSecondImageAlt')} />
          </picture>
          <Heading type="h2">{getTranslation('cooperationOfferSecondCardTitle')}</Heading>
          <ul>
            <li>
              <Paragraph type="body1">{getTranslation('cooperationOfferSecondCardListItem1')}</Paragraph>
            </li>
            <li>
              <Paragraph type="body1">{getTranslation('cooperationOfferSecondCardListItem2')}</Paragraph>
            </li>
            <li>
              <Paragraph type="body1">{getTranslation('cooperationOfferSecondCardListItem3')}</Paragraph>
            </li>
          </ul>
          <Button
            ariaLabel={getTranslation('cooperationOfferCardButtonText')}
            onClick={() => setIsShowCooperationPopUp(true)}
          >
            {getTranslation('cooperationOfferCardButtonText')}
          </Button>

          {!isLargeScreen && (
            <div>
              <button
                aria-label={getTranslation('cooperationOfferCardButton2AriaLabel')}
                onClick={() => setMobileCardIndex(1)}
              >
                <Circle fillColor="#A2A2A2" />
              </button>
              <button
                aria-label={getTranslation('cooperationOfferCardButton1AriaLabel')}
                onClick={() => setMobileCardIndex(2)}
              >
                <Circle fillColor="#22211F" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default CoopertaionOfferCards;
