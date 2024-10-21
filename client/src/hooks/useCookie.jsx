import { useEffect } from 'react';
import { cookieService } from '../utils/cookie';

export const useCookie = (name, initialValue) => {
    const cookieValue = cookieService.getCookie(name) || initialValue;

    const setCookieValue = (value, options) => {
        cookieService.setCookie(name, value, options);
    };

    const removeCookieValue = () => {
        cookieService.removeCookie(name);
    };

    useEffect(() => {
        if (!cookieValue) {
            setCookieValue(initialValue);
        }
    }, [initialValue, cookieValue, setCookieValue]);

    return [cookieValue, setCookieValue, removeCookieValue];
};
