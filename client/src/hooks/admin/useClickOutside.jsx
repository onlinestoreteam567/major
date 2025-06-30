import { useEffect, useRef } from 'react';

function useClickOutside(callback) {
  const wrapperRef = useRef(null); // Create a ref to attach to the wrapper element

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        callback(); // Call the provided callback when clicked outside
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]); // Re-run if the callback changes

  return wrapperRef; // Return the ref so the component can attach it
}

export default useClickOutside;
