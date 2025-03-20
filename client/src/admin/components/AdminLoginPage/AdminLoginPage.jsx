import Heading from '@components/UI/Texts/Heading/Heading';
import { useState, useEffect } from 'react';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthToken } from '../../redux/service';
import { loadAuth, selectAccessToken } from '../../redux/selectors';
import Spinner from '@components/helpers/Spinner';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('super@gmail.com');
  const [password, setPassword] = useState('super');
  const dispatch = useDispatch();
  const isLoading = useSelector(loadAuth);
  const authToken = useSelector(selectAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      navigate('/admin');
    }
  }, [authToken, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthToken({ email, password }));
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={cl.adminLoginPage}>
          <Heading type="h1">Admin Login</Heading>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AdminLoginPage;
