import LogoIcon from '@assets/svg/Header/LogoIcon/LogoIcon';
import { clearTokens } from '@redux/admin/auth/authSlice';
import { fetchAuthToken } from '@redux/admin/auth/service';
import { errorAuth, loadAuth, selectAccessToken } from '@redux/selectors';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cl from './index.module.scss';

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const isLoading = useSelector(loadAuth);
  const authToken = useSelector(selectAccessToken);
  const error = useSelector(errorAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      navigate('/admin');
    }
  }, [authToken, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (error) {
      dispatch(clearTokens());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthToken(formData));
  };

  return (
    <>
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
            <input
              className={error ? cl.error : ''}
              placeholder="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Password
            <input
              className={error ? cl.error : ''}
              placeholder="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          {error && <p>Введені дані неправильні</p>}
          <button type="submit" disabled={!!error || isLoading}>
            Увійти
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLoginPage;
