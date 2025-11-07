import cl from './index.module.scss';
import CooperationInviteSection from './CooperationInviteSection/CooperationInviteSection';
import CooperationOffer from './CooperationOffer/CooperationOffer';
import OurPartners from '@pages/HomePage/OurPartners/OurPartners';
import { partnersReducer } from '@redux/partners/partnerSlice';
import { useEffect, useState } from 'react';
import { injectReducers } from '@config/store';
import Spinner from '@components/UI/Spinner/Spinner';
import CooperationInterested from './CooperationInterested/CooperationInterested';

const CooperationPage = () => {
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
      <CooperationInviteSection />
      <CooperationOffer />
      <OurPartners />
      <CooperationInterested />
    </div>
  );
};

export default CooperationPage;
