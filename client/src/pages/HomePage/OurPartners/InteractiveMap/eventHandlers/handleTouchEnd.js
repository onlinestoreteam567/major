export const handleTouchEnd = (setDragState) => {
  setDragState((prevState) => ({ ...prevState, isDragging: false }));
};
