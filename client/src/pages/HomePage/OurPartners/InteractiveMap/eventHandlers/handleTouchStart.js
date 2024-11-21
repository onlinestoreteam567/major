export const handleTouchStart = (e, ref, setDragState) => {
  if (ref.current) {
    setDragState({
      isDragging: true,
      startX: e.touches[0].clientX - ref.current.offsetLeft,
      startY: e.touches[0].clientY - ref.current.offsetTop,
      scrollLeft: ref.current.scrollLeft,
      scrollTop: ref.current.scrollTop,
    });
  }
};
