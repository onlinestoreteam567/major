import { fetchPromocode } from '@redux/promocode/service';
import { useState } from 'react';
import cl from './index.module.scss';
import { useDispatch } from 'react-redux';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const Promocode = () => {
  const [promocode, setPromocode] = useState('');
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPromocode(promocode));
  };

  return (
    <form onSubmit={onSubmit} className={`${cl.promocode}`}>
      <input
        type="text"
        onChange={(e) => setPromocode(e.target.value)}
        value={promocode}
        placeholder={getTranslation('promocode')}
      />
      <BtnSubmit disabled={promocode === ''}>{getTranslation('use')}</BtnSubmit>
    </form>
  );
};
export default Promocode;
