import Cookies from 'js-cookie';

const cookieService = {
  allowCookie: (options = {}) => {
    Cookies.set('isCookieAllowed', 'true', { path: '/', { ...options, expires: 365 }});
  },

  disallowCookie: (options = {}) => {
    Cookies.remove('isCookieAllowed', { path: '/', ...options });
  },
  
  getIsCookieAllowed: () => {
    return Cookies.get('isCookieAllowed');
  },

  setCookie: (name, value, options = {}) => {
    if (this.getIsCookieAllowed() === 'true') {
      Cookies.set(name, value, { path: '/', ...options });
    } else {
      console.warn('Cookie is not allowed')
    }
  },

  getCookie: (name) => {
    return Cookies.get(name);
  },

  removeCookie: (name, options = {}) => {
    Cookies.remove(name, { path: '/', ...options });
  },
};

export default cookieService;
