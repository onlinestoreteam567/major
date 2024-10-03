import cl from "./index.module.scss";
import map from "../../../assets/png/ourPartners/map.png";
import point from "../../../assets/svg/ourPartners/point.svg";
import { useState } from "react";
import InformationAboutPartner from "./InformationAboutPartner";
import partnerData from "./partnerData";

const OurPartners = () => {
  const [showInformationAboutPartner, setShowInformationAboutPartner] =
    useState(false);
  const [closeAnimation, setCloseAnimation] = useState(true);
  const [clickLocked, setClickLocked] = useState(false);
  const [activePartner, setActivePartner] = useState(null);
  const [informationAboutPartner, setInformationAboutPartner] = useState({
    title: "",
    workSchedule: "",
    workSchedule1: "",
    adress: "",
    googleMapAdress: "",
  });

  const handlePointClick = (className) => {
    if (clickLocked) return; // Prevent multiple clicks
    setClickLocked(true);

    const partner = partnerData.find((p) => p.className === className);

    if (partner) {
      clearTimeout();
      if (className === activePartner) {
        setCloseAnimation(true);
        setTimeout(() => {
          setShowInformationAboutPartner(false);
          setActivePartner(null);
          setClickLocked(false);
        }, 500);
      } else {
        setCloseAnimation(false);
        setInformationAboutPartner(partner);
        setActivePartner(className);
        setShowInformationAboutPartner(true);
        setTimeout(() => {
          setClickLocked(false);
        }, 500);
      }
    }
  };

  return (
    <section
      className={`${cl.ourPartnersWrapper} ${
        closeAnimation ? cl.closeAnimation : ""
      }`}
    >
      <figure>
        <h2>Наші партнери</h2>
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
      {showInformationAboutPartner && (
        <InformationAboutPartner
          setShowInformationAboutPartner={setShowInformationAboutPartner}
          informationAboutPartner={informationAboutPartner}
          setCloseAnimation={setCloseAnimation}
          setActivePartner={setActivePartner}
        />
      )}
      <button>Стати партнером</button>
    </section>
  );
};

export default OurPartners;
