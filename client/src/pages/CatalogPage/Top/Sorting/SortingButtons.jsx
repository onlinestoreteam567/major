import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '@redux/selectors';
import { setProducts } from '@redux/products/listSlice';
import Heading from '@components/UI/Texts/Heading/Heading';
import { useState } from 'react';

const SortingButtons = ({ handleSelect }) => {
  const [activeSorting, setActiveSorting] = useState();
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const items = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleSorting = (type) => {
    if (handleSelect) {
      handleSelect(type);
    }
    const sorted = [...items].sort((a, b) => {
      if (type === 'asc') {
        setActiveSorting('asc');
        return a.price_with_discount - b.price_with_discount;
      } else {
        setActiveSorting('desc');
        return b.price_with_discount - a.price_with_discount;
      }
    });

    dispatch(setProducts(sorted));
  };

  return (
    <>
      <li className={`${activeSorting === 'asc' ? cl.active : ''}`}>
        <button onClick={() => handleSorting('asc')}>
          <Heading type="h3">{getTranslation('asc')}</Heading>
        </button>
      </li>
      <li className={`${activeSorting === 'desc' ? cl.active : ''}`}>
        <button onClick={() => handleSorting('desc')}>
          <Heading type="h3">{getTranslation('desc')}</Heading>
        </button>
      </li>
    </>
  );
};
export default SortingButtons;
