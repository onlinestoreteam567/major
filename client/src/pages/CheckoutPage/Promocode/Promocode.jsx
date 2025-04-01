import { fetchPromocode } from '@redux/promocode/service';
import { useState } from 'react';
// import cl from './index.module.scss';
import { useDispatch } from 'react-redux';

const Promocode = () => {
  const [promocode, setPromocode] = useState('');

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchPromocode(promocode));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={(e) => setPromocode(e.target.value)} value={promocode} />
      <button type="submit">Застосувати</button>
    </form>
  );
};
export default Promocode;
