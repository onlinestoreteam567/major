import { useCallback } from 'react';
import cookieService from '@utils/cookie';

export const useCookieConsent = () => {
  // Allow cookies and update state
  const allowCookie = useCallback((options) => {
    cookieService.allowCookie(options);
  }, []);

  // Disallow cookies and update state
  const disallowCookie = useCallback((options) => {
    cookieService.disallowCookie(options);
  }, []);

  return { allowCookie, disallowCookie };
};
