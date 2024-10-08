import cl from './index.module.scss';
import map from '../../../assets/png/ourPartners/map.png';
import point from '../../../assets/svg/ourPartners/point.svg';
import { useState, useEffect, useRef } from 'react';
import InformationAboutPartner from './InformationAboutPartner';
import partnerData from './partnerData';

const OurPartners = () => {
  // TODO Create responsive design
  const [partnerInteractionState, setPartnerInteractionState] = useState({
    showInformationAboutPartner: false,
    closeAnimation: true,
    clickLocked: false,
    activePartner: null,
  });

  const [informationAboutPartner, setInformationAboutPartner] = useState({
    title: '',
    workSchedule: '',
    workSchedule1: '',
    adress: '',
    googleMapAdress: '',
  });

  const imageContainerRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (imageContainerRef.current) {
        const container = imageContainerRef.current;
        const scrollToY = container.scrollHeight / 2.47 - container.clientHeight / 2;
        container.scrollTop = scrollToY;
        const scrollToX = container.scrollWidth / 2 - container.clientWidth / 2;
        container.scrollLeft = scrollToX;
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handlePointClick = (className) => {
    if (partnerInteractionState.clickLocked) return; // Prevent multiple clicks
    setPartnerInteractionState((prevState) => ({ ...prevState, clickLocked: true }));
    const partner = partnerData.find((p) => p.className === className);

    if (partner) {
      clearTimeout();
      if (className === partnerInteractionState.activePartner) {
        setPartnerInteractionState((prevState) => ({ ...prevState, closeAnimation: true }));
        setTimeout(() => {
          setPartnerInteractionState((prevState) => ({
            ...prevState,
            showInformationAboutPartner: false,
            clickLocked: false,
            activePartner: null,
          }));
        }, 500);
      } else {
        setPartnerInteractionState((prevState) => ({ ...prevState, closeAnimation: false, activePartner: className }));
        setInformationAboutPartner(partner);
        setPartnerInteractionState((prevState) => ({ ...prevState, showInformationAboutPartner: true }));
        setTimeout(() => {
          setPartnerInteractionState((prevState) => ({ ...prevState, clickLocked: false }));
        }, 500);
      }
    }
  };

  return (
    <section className={`${cl.ourPartnersWrapper} ${partnerInteractionState.closeAnimation ? cl.closeAnimation : ''}`}>
      <h2>Наші партнери</h2>
      <figure ref={imageContainerRef}>
        <img src={map} alt="" />

        {partnerData.map((partner) => (
          <img
            key={partner.className}
            className={`${cl.point} ${cl[partner.className]}`}
            src={point}
            alt={partner.title}
            onClick={() => handlePointClick(partner.className)}
          />
        ))}
      </figure>
      {partnerInteractionState.showInformationAboutPartner && (
        <InformationAboutPartner
          setPartnerInteractionState={setPartnerInteractionState}
          informationAboutPartner={informationAboutPartner}
        />
      )}
      <button>Стати партнером</button>
    </section>
  );
};

export default OurPartners;
