import { useState, useRef } from 'react';
import handleStart from './eventHandlers/handleStart';
import handleMove from './eventHandlers/handleMove';
import handleEnd from './eventHandlers/handleEnd';
import handleZoomIn from './eventHandlers/handleZoomIn';
import handleZoomOut from './eventHandlers/handleZoomOut';
import cl from './index.module.scss';
import ZoomOut from '@components/UI/icons/ZoomOut';
import ZoomIn from '@components/UI/icons/ZoomIn';
import { useTranslation } from 'react-i18next';
import PartnerInfo from './PartnerInfo/PartnerInfo';
import handleWheel from './eventHandlers/handleWheel';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import { loadPartners, selectPartners } from '@redux/selectors';
import { useSelector } from 'react-redux';
import Spinner from '@UI/Spinner/Spinner';

let mapImage;
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
  const { smallMobile, mobile, tablet, deskmin, deskmax } = useScreenSizes();
  const points = useSelector(selectPartners);
  const isLoading = useSelector(loadPartners);

  const setMapImage = () => {
    switch (true) {
      case mobile || smallMobile: {
        if (i18n.language === 'en') {
          mapImage = '/images/ourPartners/mapEnMobile.webp';
        } else {
          mapImage = '/images/ourPartners/mapUaMobile.webp';
        }
        break;
      }
      case tablet || deskmin || deskmax: {
        if (i18n.language === 'en') {
          mapImage = '/images/ourPartners/mapEn.webp';
        } else {
          mapImage = '/images/ourPartners/mapUa.webp';
        }
        break;
      }
    }
  };
  setMapImage();

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
        {isLoading ? (
          <Spinner />
        ) : (
          points.map((point) => (
            <button
              key={point.id}
              className={cl.mark}
              style={{
                top: `${point.latitude - topPostitionCorrection}%`,
                left: `${point.longitude - leftPostitionCorrection}%`,
              }}
              title={point.label}
              onClick={() => setInformationAboutPartner(point)}
              type="button"
              aria-label={getTranslation('ariaLabelPoint')}
            >
              <img src="/svg/ourPartners/point.svg" alt="" />
            </button>
          ))
        )}
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
