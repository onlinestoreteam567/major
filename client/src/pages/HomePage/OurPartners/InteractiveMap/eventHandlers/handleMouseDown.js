export const handleMouseDown = (e, ref, setDragState) => {
  if (ref.current) {
    setDragState({
      isDragging: true,
      startX: e.pageX - ref.current.offsetLeft,
      startY: e.pageY - ref.current.offsetTop,
      scrollLeft: ref.current.scrollLeft,
      scrollTop: ref.current.scrollTop,
    });
  }
};
