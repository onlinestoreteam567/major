import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import CoopertaionOfferCards from './CooperationOfferCards/CooperationOfferCards';
import { useState } from 'react';
import CooperationPopUp from './CooperationPopUp/CooperationPopUp';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CooperationOffer = () => {
  const { getTranslation } = useTranslationNamespace('cooperationPage');
  const [isShowCooperationPopUp, setIsShowCooperationPopUp] = useState();
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isNotShowBanner = tablet || deskmin || deskmax;

  return (
    <div className={cl.cooperationOffer}>
      <Heading type="h2">{getTranslation('cooperationOfferTitle')}</Heading>
      {!isNotShowBanner ? (
        <CoopertaionOfferCards setIsShowCooperationPopUp={setIsShowCooperationPopUp} />
      ) : (
        <div>
          <CoopertaionOfferCards setIsShowCooperationPopUp={setIsShowCooperationPopUp} />
        </div>
      )}

      {isShowCooperationPopUp && <CooperationPopUp setIsShowCooperationPopUp={setIsShowCooperationPopUp} />}
    </div>
  );
};
export default CooperationOffer;
