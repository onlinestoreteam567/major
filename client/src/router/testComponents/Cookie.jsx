import { useCookie } from '@hooks/useCookie';
import { useCookieConsent } from '@hooks/useCookieConsent';

const CookieTest = () => {
  const [userToken, setUserToken, removeUserToken] = useCookie('userToken');
  const { allowCookie, disallowCookie } = useCookieConsent();
  const handleSetCookie = () => {
    setUserToken('abc123', { expires: 7 }); // Sets a cookie for 7 days
  };

  const handleRemoveCookie = () => {
    removeUserToken(); // Removes the cookie
  };

  const handleAllowCookie = () => {
    allowCookie();
  };

  const handleDisallowCookie = () => {
    disallowCookie();
  };

  return (
    <div>
      <button onClick={handleSetCookie} style={{ color: 'black' }}>
        Set Cookie
      </button>
      <button onClick={handleRemoveCookie} style={{ color: 'black' }}>
        Remove Cookie
      </button>
      <button onClick={handleAllowCookie} style={{ color: 'black' }}>
        Allow Cookie
      </button>
      <button onClick={handleDisallowCookie} style={{ color: 'black' }}>
        Disallow Cookie
      </button>
      <p style={{ color: 'black' }}>Cookie Value: {userToken || 'No Cookie Set'}</p>
    </div>
  );
};

export default CookieTest;
