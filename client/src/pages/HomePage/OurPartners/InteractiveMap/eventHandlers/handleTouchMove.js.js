export const handleTouchMove = (e, ref, dragState) => {
  if (!dragState.isDragging || !ref.current) return;
  e.preventDefault();
  const x = e.touches[0].clientX - ref.current.offsetLeft;
  const y = e.touches[0].clientY - ref.current.offsetTop;
  const walkX = (x - dragState.startX) * 1;
  const walkY = (y - dragState.startY) * 1;
  ref.current.scrollLeft = dragState.scrollLeft - walkX;
  ref.current.scrollTop = dragState.scrollTop - walkY;
};
