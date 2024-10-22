import { useCookie } from '../../hooks/useCookie';

const CookieTest = () => {
  const [userToken, setUserToken, removeUserToken] = useCookie('userToken');

  const handleSetCookie = () => {
    setUserToken('abc123', { expires: 7 }); // Sets a cookie for 7 days
  };

  const handleRemoveCookie = () => {
    removeUserToken(); // Removes the cookie
  };

  const handleAllowCookie = () => {
    removeUserToken(); // Removes the cookie
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
      <p style={{ color: 'black' }}>Cookie Value: {userToken || 'No Cookie Set'}</p>
    </div>
  );
};

export default CookieTest;
