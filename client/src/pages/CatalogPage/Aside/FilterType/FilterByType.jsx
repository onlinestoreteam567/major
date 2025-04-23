import { useEffect } from 'react';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import Spinner from '@components/helpers/Spinner/Spinner';
import { filterType, loadTypes, selectTypes } from '@redux/selectors';
import { fetchProductsAll, getProductsByTypes } from '@redux/products/service';
import { setType } from '@redux/filter/filterSlice';

export default function FilterByType() {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const isLoading = useSelector(loadTypes);
  const items = useSelector(selectTypes);
  const selectedTypes = useSelector(filterType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTypes === null) return;

    if (selectedTypes.length > 0) {
      dispatch(getProductsByTypes(selectedTypes));
    } else {
      dispatch(fetchProductsAll());
    }
  }, [selectedTypes, dispatch]);

  const handleCheckboxChange = (id) => dispatch(setType(id));

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
                    checked={Array.isArray(selectedTypes) && selectedTypes.includes(String(item.id))}
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
