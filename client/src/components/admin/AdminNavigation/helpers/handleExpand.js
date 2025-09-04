const handleExpand = (e, isExpanded, setIsExpanded, tablet, setIsShowBurgerButton) => {
  const target = e.target;
  if (target.closest('a') || target.closest('button')) return;
  if (!isExpanded && tablet) setIsExpanded(true);
  if (isExpanded && tablet) {
    setIsExpanded(false);
    setIsShowBurgerButton(false);
  }
};

export default handleExpand;
