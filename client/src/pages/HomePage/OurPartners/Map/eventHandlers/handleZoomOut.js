const handleZoomOut = (setScale, setPosition) => {
  setScale((prevScale) => {
    const newScale = Math.max(prevScale - 0.1, 1);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
    return newScale;
  });
};

export default handleZoomOut;
