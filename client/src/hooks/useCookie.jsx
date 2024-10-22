import { useState, useEffect, useCallback, useMemo } from 'react';
import cookieService from '../utils/cookie';
import { useCookieConsent } from './useCookieConsent';

// POSIBLE OPTRIONS
// expires: number | Date
// path: string
// domain: string
// secure: boolean
// sameSite: 'strict' | 'lax' | 'none'
// httpOnly: boolean (note: only used on the server-side, not applicable to client-side JavaScript)
// priority: 'low' | 'medium' | 'high' (for newer browsers)
// encode: (value: string) => string (custom function for encoding the cookie value)

export const useCookie = (cookieName) => {
  const initialCookieValue = useMemo(() => cookieService.getCookie(cookieName), [cookieName]);
  const [cookieValue, setCookieValue] = useState(initialCookieValue);
  const { isCookieAllowed } = useCookieConsent();

  // Set the cookie and update the local state
  const set = useCallback(
    (value, options = {}) => {
      if (isCookieAllowed) {
        cookieService.setCookie(cookieName, value, options);
        setCookieValue(value);
      }
    },
    [cookieName]
  );

  // Remove the cookie and clear the local state
  const remove = useCallback(
    (options = {}) => {
      cookieService.removeCookie(cookieName, options);
      setCookieValue(null);
    },
    [cookieName]
  );

  // Ensure the hook's state is in sync with the cookie
  useEffect(() => {
    const value = cookieService.getCookie(cookieName);
    if (value !== cookieValue) {
      setCookieValue(value);
    }
  }, [cookieName, cookieValue]);

  return [cookieValue, set, remove];
};
