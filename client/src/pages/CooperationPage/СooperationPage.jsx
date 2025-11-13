import cl from './index.module.scss';
import CooperationInviteSection from './CooperationInviteSection/CooperationInviteSection';
import CooperationOffer from './CooperationOffer/CooperationOffer';
import OurPartners from '@pages/HomePage/OurPartners/OurPartners';
import CooperationInterested from './CooperationInterested/CooperationInterested';
import { Helmet } from 'react-helmet-async';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CooperationPage = () => {
  const { getTranslation } = useTranslationNamespace('cooperationPage');

  return (
    <div className={cl.cooperationPage}>
      <Helmet>
        <title>{getTranslation('metaTitle')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
      </Helmet>

      <CooperationInviteSection />
      <CooperationOffer />
      <OurPartners />
      <CooperationInterested />
    </div>
  );
};

export default CooperationPage;
