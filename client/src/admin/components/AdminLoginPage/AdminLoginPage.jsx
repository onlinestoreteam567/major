import { useState, useEffect } from 'react';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthToken } from '../../redux/service';
import { loadAuth, selectAccessToken } from '../../redux/selectors';
import Spinner from '@components/helpers/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '@assets/svg/Header/LogoIcon/LogoIcon';
import BtnSubmit from '@components/UI/Button/BtnSubmit';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin');
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
          <header>
            <LogoIcon fillColor="#FFFFFF" />
          </header>

          <form onSubmit={handleSubmit}>
            <h1>
              <img src="/svg/admin/login.svg" />
              Введіть дані для входу
            </h1>
            <label>
              Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <BtnSubmit>Увійти</BtnSubmit>
          </form>
        </div>
      )}
    </>
  );
};

export default AdminLoginPage;
