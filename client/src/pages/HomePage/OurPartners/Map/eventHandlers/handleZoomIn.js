const handleZoomIn = (setScale) => {
  setScale((prevScale) => Math.min(prevScale + 0.1, 3));
};

export default handleZoomIn;
