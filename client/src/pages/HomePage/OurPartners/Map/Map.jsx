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

const Map = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrameRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={cl.mainMapContainer}
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
        <button onClick={() => handleZoomIn(setScale)}>
          <ZoomIn />
        </button>
        <button onClick={() => handleZoomOut(setScale, setPosition)}>
          <ZoomOut />
        </button>
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
          src="/images/ourPartners/mapUa.png"
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
            onClick={() => alert(`Clicked on ${point.label}`)}
          >
            <img src="/svg/ourPartners/point.svg" alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Map;
