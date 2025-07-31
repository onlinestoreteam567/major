import { fetchPromocode } from '@redux/promocode/service';
import { useState } from 'react';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { errorPromocode, loadPromocode, selectPromocode } from '@redux/selectors';
import { cleanPromocode } from '@redux/promocode/promocodeSlice';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
const Promocode = () => {
  const [promocode, setPromocode] = useState('');
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const isLoading = useSelector(loadPromocode);
  const appliedPromocode = useSelector(selectPromocode);
  const error = useSelector(errorPromocode);

  const isDisabled = promocode === '' || isLoading || error;

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPromocode(promocode));
  };

  const handleInput = (inputValue) => {
    setPromocode(inputValue);
    if (error) {
      dispatch(cleanPromocode());
    }
  };

  return (
    <form onSubmit={onSubmit} className={`${cl.promocode}`}>
      <div>
        <input
          className={appliedPromocode ? cl.applied : ''}
          type="text"
          onChange={(e) => handleInput(e.target.value)}
          value={promocode}
          placeholder={getTranslation('promocode')}
        />
        {error && <Paragraph type="caption">Недійсний промокод</Paragraph>}
      </div>
      <BtnSubmit disabled={isDisabled}>{getTranslation('use')}</BtnSubmit>
    </form>
  );
};
export default Promocode;
