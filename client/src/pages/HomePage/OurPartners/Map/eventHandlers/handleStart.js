const handleStart = (e, scale, setIsDragging, setDragStart, position) => {
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  if (scale > 1) {
    setIsDragging(true);
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  }
};

export default handleStart;
