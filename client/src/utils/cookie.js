import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const setCookie = (name, value, options = {}) => {
    cookies.set(name, value, { path: '/', ...options });
};

const getCookie = (name) => {
    return cookies.get(name);
};

const removeCookie = (name) => {
    cookies.remove(name, { path: '/' });
};

export default {
    setCookie,
    getCookie,
    removeCookie,
};
