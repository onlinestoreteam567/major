import React, { useState, useRef, useEffect } from 'react';
import cl from './index.module.scss';
import map from '../../../assets/png/ourPartners/map.png';
import point from '../../../assets/svg/ourPartners/point.svg';

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
    // Change number for change speed
    const walkX = (x - dragState.startX) * 1;
    const walkY = (y - dragState.startY) * 1;
    imageContainerRef.current.scrollLeft = dragState.scrollLeft - walkX;
    imageContainerRef.current.scrollTop = dragState.scrollTop - walkY;
  };

  // UseEffect for the initial centering of the map
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (imageContainerRef.current) {
        const container = imageContainerRef.current;
        const scrollToY = container.scrollHeight / 2.7 - container.clientHeight / 2;
        container.scrollTop = scrollToY;
        const scrollToX = container.scrollWidth / 2 - container.clientWidth / 2;
        container.scrollLeft = scrollToX;
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <figure
      ref={imageContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={cl.mapContainer}
    >
      <img src={map} alt="Map" onDragStart={(e) => e.preventDefault()} />
      {partnerData.map((partner) => (
        <img
          key={partner.className}
          className={`${cl.point} ${cl[partner.className]}`}
          src={point}
          alt={partner.title}
          onClick={() => onPointClick(partner.className)}
          onDragStart={(e) => e.preventDefault()}
        />
      ))}
    </figure>
  );
};

export default MapWithPoints;
