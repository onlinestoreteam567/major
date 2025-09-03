import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { useTranslation } from 'react-i18next';

let imgSrc;

const Formula = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isDesk = deskmin || deskmax;
  const { i18n } = useTranslation();
  switch (true) {
    case tablet === true: {
      i18n.language === 'ua'
        ? (imgSrc = '/images/about/formulaTabletUa.webp')
        : (imgSrc = '/images/about/formulaDeskEng.webp');
      break;
    }
    case isDesk === false: {
      i18n.language === 'ua'
        ? (imgSrc = '/images/about/formulaMobileUa.webp')
        : (imgSrc = '/images/about/formulaMobileEng.webp');
      break;
    }

    case isDesk === true: {
      i18n.language === 'ua'
        ? (imgSrc = '/images/about/formulaDeskUa.webp')
        : (imgSrc = '/images/about/formulaDeskEng.webp');
      break;
    }
  }
  return (
    <div className={cl.formula}>
      <Heading type="h2">Кожен компонент — не випадковий. Він: </Heading>
      <img src={imgSrc} alt="" />
    </div>
  );
};
export default Formula;
