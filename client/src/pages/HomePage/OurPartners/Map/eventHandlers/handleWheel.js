const handleWheel = (e, scale, setScale, setPosition, position, containerRef) => {
  e.preventDefault();

  const zoomIntensity = 0.1;
  let newScale = scale - e.deltaY * zoomIntensity * 0.01;

  newScale = Math.min(Math.max(newScale, 1), 3);

  if (containerRef.current) {
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
