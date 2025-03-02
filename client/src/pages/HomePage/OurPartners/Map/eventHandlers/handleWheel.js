const handleWheel = (e, scale, setScale, setPosition, containerRef) => {
  if (!e.shiftKey) return;

  e.preventDefault();

  const zoomIntensity = 0.1;
  let newScale = scale - e.deltaY * zoomIntensity * 0.01;
  newScale = Math.min(Math.max(newScale, 1), 3);

  if (newScale === 1) {
    setPosition({ x: 0, y: 0 });
  } else if (containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;

    setPosition((prev) => ({
      x: prev.x + (offsetX - 0.5) * (scale - newScale) * rect.width,
      y: prev.y + (offsetY - 0.5) * (scale - newScale) * rect.height,
    }));
  }

  setScale(newScale);
};

export default handleWheel;
