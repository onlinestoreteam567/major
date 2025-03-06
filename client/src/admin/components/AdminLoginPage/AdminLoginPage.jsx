import Heading from '@components/UI/Texts/Heading/Heading';
import { useState } from 'react';
import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import { fetchAuthToken } from '../../redux/service';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('super@gmail.com');
  const [password, setPassword] = useState('super');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthToken({ email: email, password: password }));
  };

  return (
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
  );
};

export default AdminLoginPage;
