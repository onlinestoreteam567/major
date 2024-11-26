export const handleMouseUp = (setDragState) => {
  setDragState((prevState) => ({ ...prevState, isDragging: false }));
};
