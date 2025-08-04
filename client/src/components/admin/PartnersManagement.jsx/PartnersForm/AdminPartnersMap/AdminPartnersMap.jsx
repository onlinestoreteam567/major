import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes';

const AdminPartnersMap = ({ getValues, watch }) => {
  const { mobile, tablet, deskmin, deskmax } = useScreenSizes();

  const [points, setPoints] = useState([]);

  useEffect(() => {
    const updatePoints = () => {
      const { latitude, longitude } = getValues();

      const latNum = Number(latitude);
      const lonNum = Number(longitude);

      if (!isNaN(latNum) && !isNaN(lonNum) && latitude !== '' && longitude !== '') {
        setPoints([[latNum, lonNum]]);
      } else {
        setPoints([]);
      }
    };

    updatePoints();

    const subscription = watch((_, { name }) => {
      if (name === 'latitude' || name === 'longitude') {
        updatePoints();
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, getValues]);

  const getMarkerOffsets = () => {
    let topPostitionCorrection = 9.5;
    let leftPostitionCorrection = 3.5;

    switch (true) {
      case mobile:
        topPostitionCorrection = 8;
        leftPostitionCorrection = 2.5;
        break;
      case tablet:
        topPostitionCorrection = 2.3;
        leftPostitionCorrection = 1;
        break;
      case deskmin:
        topPostitionCorrection = 0;
        leftPostitionCorrection = 0;
        break;
      case deskmax:
        topPostitionCorrection = -1;
        leftPostitionCorrection = 0;
        break;
    }

    return { topPostitionCorrection, leftPostitionCorrection };
  };

  const { topPostitionCorrection, leftPostitionCorrection } = getMarkerOffsets();

  return (
    <div className={cl.mainMapContainer}>
      <img src={'/images/ourPartners/mapUa.webp'} alt="Map" draggable="false" />

      {points.map((point, index) => (
        <button
          key={index}
          className={cl.mark}
          style={{
            top: `${point[0] - topPostitionCorrection}%`,
            left: `${point[1] - leftPostitionCorrection}%`,
          }}
          type="button"
        >
          <img src="/svg/ourPartners/point.svg" />
        </button>
      ))}
    </div>
  );
};

export default AdminPartnersMap;
