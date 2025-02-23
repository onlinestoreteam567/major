const handleMove = (e, isDragging, containerRef, imageRef, animationFrameRef, dragStart, scale, setPosition) => {
  if (!isDragging || !containerRef.current || !imageRef.current) return;
  e.preventDefault();

  if (animationFrameRef.current) {
    cancelAnimationFrame(animationFrameRef.current);
  }

  animationFrameRef.current = requestAnimationFrame(() => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    let newX = clientX - dragStart.x;
    let newY = clientY - dragStart.y;

    const maxX = Math.max((imageRect.width * scale - containerRect.width) / 2, 0);
    const maxY = Math.max((imageRect.height * scale - containerRect.height) / 2, 0);

    newX = Math.min(Math.max(newX, -maxX), maxX);
    newY = Math.min(Math.max(newY, -maxY), maxY);

    setPosition({ x: newX, y: newY });
  });
};

export default handleMove;
