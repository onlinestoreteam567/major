import { useState, useEffect, useRef, useCallback } from 'react';

const useTimedMessage = (duration = 3000) => {
  const [message, setMessage] = useState();
  const timerRef = useRef(null);

  const showMessage = useCallback(
    (text) => {
      setMessage(text);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setMessage(null);
        timerRef.current = null;
      }, duration);
    },
    [duration]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return [message, showMessage];
};

export default useTimedMessage;
