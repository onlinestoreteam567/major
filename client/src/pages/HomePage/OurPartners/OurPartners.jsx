import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import Button from '@components/UI/Button/Button';
import Map from './Map/Map';

const OurPartners = () => {
  const { getTranslation } = useTranslationNamespace('ourPartners');

  return (
    <section className={`${cl.ourPartnersWrapper} `}>
      <Heading type="h2">{getTranslation('ourPartners')}</Heading>
      <Map />
      <Button>{getTranslation('becomePartner')}</Button>
    </section>
  );
};

export default OurPartners;
