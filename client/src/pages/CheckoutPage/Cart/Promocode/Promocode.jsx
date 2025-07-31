import { fetchPromocode } from '@redux/promocode/service';
import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import BtnSubmit from '@components/UI/Button/BtnSubmit';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { errorPromocode, loadPromocode, selectPromocode } from '@redux/selectors';
import { cleanPromocode } from '@redux/promocode/promocodeSlice';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
const Promocode = () => {
  const dispatch = useDispatch();
  const [promocode, setPromocode] = useState('');
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const isLoading = useSelector(loadPromocode);
  const appliedPromocode = useSelector(selectPromocode);
  const error = useSelector(errorPromocode);

  const isDisabled = promocode === '' || isLoading || error;

  useEffect(() => {
    if (error && promocode === '') {
      dispatch(cleanPromocode());
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (appliedPromocode) {
      dispatch(cleanPromocode());
      setPromocode('');
      return;
    }

    dispatch(fetchPromocode(promocode));
  };

  const handleInput = (inputValue) => {
    setPromocode(inputValue);
    if (error || appliedPromocode) dispatch(cleanPromocode());
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
        {error && <Paragraph type="caption">{getTranslation('invalidPromoCode')}</Paragraph>}
      </div>
      <BtnSubmit disabled={isDisabled}>
        {appliedPromocode ? getTranslation('delete') : getTranslation('use')}{' '}
      </BtnSubmit>
    </form>
  );
};
export default Promocode;
