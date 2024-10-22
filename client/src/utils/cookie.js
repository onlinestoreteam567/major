import Cookies from 'js-cookie';

const cookieService = {
  allowCookie: (options = {}) => {
    Cookies.set('isCookieAllowed', 'true', { path: '/', expires: 365, ...options });
  },

  disallowCookie: (options = {}) => {
    Cookies.remove('isCookieAllowed', { path: '/', ...options });
  },

  getIsCookieAllowed: () => {
    return Cookies.get('isCookieAllowed') === 'true' ? true : false;
  },

  setCookie: function (name, value, options = {}) {
    if (this.getIsCookieAllowed()) {
      Cookies.set(name, value, { path: '/', ...options });
    } else {
      console.warn('Cookie is not allowed');
    }
  },

  getCookie: (name) => {
    return Cookies.get(name) || null;
  },

  removeCookie: (name, options = {}) => {
    Cookies.remove(name, { path: '/', ...options });
  },
};

export default cookieService;
