import { useState, useEffect, useCallback } from 'react';
import cookieService from '../utils/cookie'; // Adjust the import path as needed

export const useCookieConsent = () => {
  // BUG: STATE IS NOT UPDATING AS EXPECTED
  const [isCookieAllowed, setIsCookieAllowed] = useState(cookieService.getIsCookieAllowed());

  // Allow cookies and update state
  const allowCookie = useCallback((options) => {
    cookieService.allowCookie(options);
    setIsCookieAllowed(true);
  }, []);

  // Disallow cookies and update state
  const disallowCookie = useCallback((options) => {
    cookieService.disallowCookie(options);
    setIsCookieAllowed(false);
  }, []);

  // Effect to sync state with the cookie
  useEffect(() => {
    const cookieStatus = cookieService.getIsCookieAllowed();
    setIsCookieAllowed(cookieStatus);
  }, []);

  return { isCookieAllowed, allowCookie, disallowCookie };
};
