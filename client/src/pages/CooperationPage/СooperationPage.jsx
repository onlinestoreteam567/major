import cl from './index.module.scss';
import CooperationInviteSection from './CooperationInviteSection/CooperationInviteSection';
import CooperationOffer from './CooperationOffer/CooperationOffer';

const СooperationPage = () => {
  return (
    <div className={cl.cooperationPage}>
      <CooperationInviteSection />
      <CooperationOffer />
    </div>
  );
};

export default СooperationPage;
