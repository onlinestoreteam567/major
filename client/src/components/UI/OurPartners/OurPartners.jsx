import cl from "./index.module.scss";
import map from "../../../assets/png/ourPartners/map.png";
import point from "../../../assets/svg/ourPartners/point.svg";
import { useState } from "react";
import InformationAboutPartner from "./InformationAboutPartner";
import partnerData from "./partnerData";

const OurPartners = () => {
  const [showInformationAboutPartner, setShowInformationAboutPartner] =
    useState(false);
  const [informationAboutPartner, setInformationAboutPartner] = useState({
    title: "",
    workSchedule: "",
    workSchedule1: "",
    adress: "",
    googleMapAdress: "",
  });

  const handlePointClick = (className) => {
    const partner = partnerData.find((p) => p.className === className);
    if (partner) {
      clearTimeout();

      setInformationAboutPartner(partner);
      setShowInformationAboutPartner(!showInformationAboutPartner);
    }
  };
  return (
    <section className={cl.ourPartnersWrapper}>
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
        />
      )}
      <button>Стати партнером</button>
    </section>
  );
};
export default OurPartners;
