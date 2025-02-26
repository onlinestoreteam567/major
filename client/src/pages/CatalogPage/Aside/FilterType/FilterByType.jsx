import { useState, useEffect } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import Spinner from '@components/helpers/Spinner';
import { loadTypes, selectTypes } from '@redux/selectors';
import { fetchProductsAll, getProductsByTypes } from '@redux/products/service';

export default function FilterByType() {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const isLoading = useSelector(loadTypes);
  const items = useSelector(selectTypes);
  const dispatch = useDispatch();
  const [selectedTypes, setSelectedTypes] = useState(null);

  useEffect(() => {
    if (selectedTypes === null) return;

    if (selectedTypes.length > 0) {
      dispatch(getProductsByTypes(selectedTypes));
    } else {
      dispatch(fetchProductsAll());
    }
  }, [selectedTypes, dispatch]);

  const handleCheckboxChange = (id) => {
    setSelectedTypes((prev) => {
      if (prev === null) {
        return [id];
      }
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const showArr = Array.isArray(items) && items.length !== 0;

  return (
    <div className={cl.filterByTypeWrapper}>
      <Heading type="h4">{getTranslation('category')}</Heading>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {showArr ? (
            items.map((item) => (
              <li key={item.id}>
                <label>
                  <img
                    src={
                      selectedTypes && selectedTypes.includes(String(item.id))
                        ? '/svg/catalogPage/checkbox.svg'
                        : '/svg/catalogPage/emptyCheckbox.svg'
                    }
                    alt={selectedTypes && selectedTypes.includes(String(item.id)) ? 'Checked' : 'Unchecked'}
                  />
                  <input
                    type="checkbox"
                    name="type"
                    value={item.id}
                    checked={selectedTypes && selectedTypes.includes(String(item.id))}
                    onChange={() => handleCheckboxChange(String(item.id))}
                  />
                  <p>{item.name}</p>
                </label>
              </li>
            ))
          ) : (
            <EmptyPage message="Не знайдено" />
          )}
        </ul>
      )}
    </div>
  );
}
