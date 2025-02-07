import { useState, useRef, useCallback } from 'react';

const DraggableResizableImage = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrameRef = useRef(null);

  const points = [
    { id: 1, x: 30, y: 40, label: 'Kyiv' },
    { id: 2, x: 60, y: 20, label: 'Lviv' },
    { id: 3, x: 80, y: 70, label: 'Odesa' },
  ];

  const handleStart = useCallback(
    (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (scale > 1) {
        setIsDragging(true);
        setDragStart({ x: clientX - position.x, y: clientY - position.y });
      }
    },
    [scale, position]
  );

  const handleMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current || !imageRef.current) return;
      e.preventDefault(); // Prevent scrolling while dragging on mobile

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();

        let newX = clientX - dragStart.x;
        let newY = clientY - dragStart.y;

        const maxX = Math.max((imageRect.width * scale - containerRect.width) / 2, 0);
        const maxY = Math.max((imageRect.height * scale - containerRect.height) / 2, 0);

        newX = Math.min(Math.max(newX, -maxX), maxX);
        newY = Math.min(Math.max(newY, -maxY), maxY);

        setPosition({ x: newX, y: newY });
      });
    },
    [isDragging, dragStart, scale]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 3));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => {
      const newScale = Math.max(prevScale - 0.1, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '356px',
        height: '356px',
        overflow: 'hidden',
        border: '2px solid black',
        margin: 'auto',
        touchAction: 'none', // Disable browser gestures
      }}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      <button onClick={handleZoomIn} style={{ ...buttonStyle, left: '200px' }}>
        +
      </button>
      <button onClick={handleZoomOut} style={{ ...buttonStyle, left: '100px' }}>
        -
      </button>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) translate(-50%, -50%)`,
          transformOrigin: 'center',
          transition: isDragging ? 'none' : 'transform 0.2s ease-out',
        }}
      >
        <img
          ref={imageRef}
          src="/images/ourPartners/mapUa.png"
          alt="Map"
          draggable="false"
          style={{ width: '356px', display: 'block' }}
          onMouseDown={handleStart}
          onTouchStart={handleStart} // Handle touch events
        />

        {points.map((point) => (
          <div
            key={point.id}
            style={{
              position: 'absolute',
              top: `${point.y}%`,
              left: `${point.x}%`,
              width: '10px',
              height: '10px',
              backgroundColor: 'red',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
            title={point.label}
            onClick={() => alert(`Clicked on ${point.label}`)}
          />
        ))}
      </div>
    </div>
  );
};

const buttonStyle = {
  position: 'absolute',
  top: 20,
  padding: '10px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  cursor: 'pointer',
  zIndex: 10,
};

export default DraggableResizableImage;
