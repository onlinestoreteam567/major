import { useState, useRef } from 'react';
import cl from './index.module.scss';
import { useTranslation } from 'react-i18next';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import useCenterMap from '@hooks/mapWithPoints/useCenterMap';

const MapWithPoints = ({ partnerData, onPointClick }) => {
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const imageContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    if (imageContainerRef.current) {
      setDragState({
        isDragging: true,
        startX: e.pageX - imageContainerRef.current.offsetLeft,
        startY: e.pageY - imageContainerRef.current.offsetTop,
        scrollLeft: imageContainerRef.current.scrollLeft,
        scrollTop: imageContainerRef.current.scrollTop,
      });
    }
  };

  const handleMouseLeave = () => {
    setDragState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const handleMouseUp = () => {
    setDragState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const handleMouseMove = (e) => {
    if (!dragState.isDragging || !imageContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - imageContainerRef.current.offsetLeft;
    const y = e.pageY - imageContainerRef.current.offsetTop;
    const walkX = (x - dragState.startX) * 1;
    const walkY = (y - dragState.startY) * 1;
    imageContainerRef.current.scrollLeft = dragState.scrollLeft - walkX;
    imageContainerRef.current.scrollTop = dragState.scrollTop - walkY;
  };

  useCenterMap(imageContainerRef); // Use the custom hook for centering

  const { i18n } = useTranslation();
  const mapImage = i18n.language === 'en' ? '/images/ourPartners/mapEn.png' : '/images/ourPartners/mapUa.png';
  const { getTranslation } = useTranslationNamespace('ourPartners');

  return (
    <figure
      ref={imageContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={cl.mapContainer}
    >
      <img src={mapImage} alt={getTranslation('mapAlt')} onDragStart={(e) => e.preventDefault()} />
      {partnerData.map((partner) => (
        <img
          key={partner.className}
          className={`${cl.point} ${cl[partner.className]}`}
          src="/svg/ourPartners/point.svg"
          alt={partner.title}
          onClick={() => onPointClick(partner.className)}
          onDragStart={(e) => e.preventDefault()}
        />
      ))}
    </figure>
  );
};

export default MapWithPoints;
