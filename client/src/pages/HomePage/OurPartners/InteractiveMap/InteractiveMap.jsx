import { useState, useRef } from 'react';
import cl from './index.module.scss';
import { useTranslation } from 'react-i18next';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import useCenterMap from '@hooks/interactiveMap/useCenterMap';
import { handleMouseDown } from './eventHandlers/handleMouseDown';
import { handleTouchStart } from './eventHandlers/handleTouchStart';
import { handleMouseMove } from './eventHandlers/handleMouseMove';
import { handleTouchMove } from './eventHandlers/handleTouchMove.js';
import { handleMouseUp } from './eventHandlers/handleMouseUp';
import { handleTouchEnd } from './eventHandlers/handleTouchEnd';

const InteractiveMap = ({ partnerData, onPointClick }) => {
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const imageContainerRef = useRef(null);

  useCenterMap(imageContainerRef);

  const { i18n } = useTranslation();
  const mapImage = i18n.language === 'en' ? '/images/ourPartners/mapEn.png' : '/images/ourPartners/mapUa.png';
  const { getTranslation } = useTranslationNamespace('ourPartners');

  return (
    <figure
      ref={imageContainerRef}
      onMouseDown={(e) => handleMouseDown(e, imageContainerRef, setDragState)}
      onTouchStart={(e) => handleTouchStart(e, imageContainerRef, setDragState)}
      onMouseMove={(e) => handleMouseMove(e, imageContainerRef, dragState)}
      onTouchMove={(e) => handleTouchMove(e, imageContainerRef, dragState)}
      onMouseUp={() => handleMouseUp(setDragState)}
      onTouchEnd={() => handleTouchEnd(setDragState)}
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

export default InteractiveMap;
