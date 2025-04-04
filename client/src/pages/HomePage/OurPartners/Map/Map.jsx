import { useState, useRef } from 'react';
import handleStart from './eventHandlers/handleStart';
import handleMove from './eventHandlers/handleMove';
import handleEnd from './eventHandlers/handleEnd';
import handleZoomIn from './eventHandlers/handleZoomIn';
import handleZoomOut from './eventHandlers/handleZoomOut';
import points from './points.json';
import cl from './index.module.scss';
import ZoomOut from '@assets/svg/ZoomOut';
import ZoomIn from '@assets/svg/ZoomIn';
import { useTranslation } from 'react-i18next';
import PartnerInfo from '../PartnerInfo/PartnerInfo';
import handleWheel from './eventHandlers/handleWheel';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel/ButtonAriaLabel';

const Map = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [informationAboutPartner, setInformationAboutPartner] = useState(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrameRef = useRef(null);
  const { i18n } = useTranslation();
  const { getTranslation } = useTranslationNamespace('ourPartners');

  const mapImage = i18n.language === 'en' ? '/images/ourPartners/mapEn.webp' : '/images/ourPartners/mapUa.webp';

  return (
    <div
      ref={containerRef}
      className={cl.mainMapContainer}
      onWheel={(e) => handleWheel(e, scale, setScale, setPosition, containerRef)}
      onMouseMove={(e) =>
        handleMove(e, isDragging, containerRef, imageRef, animationFrameRef, dragStart, scale, setPosition)
      }
      onMouseUp={() => handleEnd(setIsDragging)}
      onMouseLeave={() => handleEnd(setIsDragging)}
      onTouchMove={(e) =>
        handleMove(e, isDragging, containerRef, imageRef, animationFrameRef, dragStart, scale, setPosition)
      }
      onTouchEnd={() => handleEnd(setIsDragging)}
    >
      <div className={cl.zoomButtonsWrapper}>
        <ButtonAriaLabel al={getTranslation('ariaLableZoomIn')} onClick={() => handleZoomIn(setScale)}>
          <ZoomIn />
        </ButtonAriaLabel>
        <ButtonAriaLabel al={getTranslation('ariaLableZoomOut')} onClick={() => handleZoomOut(setScale, setPosition)}>
          <ZoomOut />
        </ButtonAriaLabel>
      </div>

      <div
        className={cl.containerWithMap}
        style={{
          transform: `translate(-50%, -50%) scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
          transformOrigin: 'center',
          transition: isDragging ? 'none' : 'transform 0.2s ease-out',
        }}
      >
        <img
          ref={imageRef}
          className={cl.map}
          src={mapImage}
          alt="Map"
          draggable="false"
          onMouseDown={(e) => {
            handleStart(e, scale, setIsDragging, setDragStart, position);
          }}
          onTouchStart={(e) => {
            handleStart(e, scale, setIsDragging, setDragStart, position);
          }}
        />

        {points.map((point) => (
          <button
            key={point.id}
            className={cl.mark}
            style={{
              top: `${point.y}%`,
              left: `${point.x}%`,
            }}
            title={point.label}
            onClick={() => setInformationAboutPartner(point)}
            type="button"
            aria-label={getTranslation('ariaLabelPoint')}
          >
            <img src="/svg/ourPartners/point.svg" alt="" />
          </button>
        ))}
      </div>
      {informationAboutPartner && (
        <PartnerInfo
          informationAboutPartner={informationAboutPartner}
          setInformationAboutPartner={setInformationAboutPartner}
        />
      )}
    </div>
  );
};

export default Map;
