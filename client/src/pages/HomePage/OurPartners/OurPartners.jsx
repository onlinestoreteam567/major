import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Texts/Heading/Heading';
import Button from '@components/UI/Button/Button';
import Map from './Map/Map';

const OurPartners = () => {
  const { getTranslation } = useTranslationNamespace('ourPartners');
  return (
    <section className={cl.ourPartners}>
      <Heading type="h2">{getTranslation('ourPartners')}</Heading>
      <Map />
      <div className={cl.buttonWrapper}>
        <Button>{getTranslation('becomePartner')}</Button>
      </div>
    </section>
  );
};

export default OurPartners;
