// src/services/cookieService.js
import Cookies from 'js-cookie';

const cookieService = {
  setCookie: (name, value, options = {}) => {
    Cookies.set(name, value, { path: '/', ...options });
  },

  getCookie: (name) => {
    return Cookies.get(name);
  },

  removeCookie: (name, options = {}) => {
    Cookies.remove(name, { path: '/', ...options });
  },
};

export default cookieService;
