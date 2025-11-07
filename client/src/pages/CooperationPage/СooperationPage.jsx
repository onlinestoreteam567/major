import cl from './index.module.scss';
import CooperationInviteSection from './CooperationInviteSection/CooperationInviteSection';
import CooperationOffer from './CooperationOffer/CooperationOffer';
import OurPartners from '@pages/HomePage/OurPartners/OurPartners';
import { partnersReducer } from '@redux/partners/partnerSlice';
import { useEffect, useState } from 'react';
import { injectReducers } from '@config/store';
import Spinner from '@components/UI/Spinner/Spinner';
import CooperationInterested from './CooperationInterested/CooperationInterested';
import { Helmet } from 'react-helmet-async';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CooperationPage = () => {
  const { getTranslation } = useTranslationNamespace('cooperationPage');
  const [isReducerLoaded, setIsReducerLoaded] = useState(false);

  const cooperationPageReducers = {
    partners: partnersReducer,
  };

  useEffect(() => {
    injectReducers(cooperationPageReducers);
    setIsReducerLoaded(true);
  }, []);

  return !isReducerLoaded ? (
    <Spinner />
  ) : (
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
