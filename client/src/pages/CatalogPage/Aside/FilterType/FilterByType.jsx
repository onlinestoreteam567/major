import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import Spinner from '@components/helpers/Spinner';
import { filterType, loadTypes, selectTypes } from '@redux/selectors';
import { getProductsByTypes } from '@redux/products/service';
import { setType } from '@redux/filter/filterSlice';

export default function FilterByType() {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const dispatch = useDispatch();
  const newType = useSelector(filterType);
  console.log('TYPE', newType);

  const isLoading = useSelector(loadTypes);
  const items = useSelector(selectTypes);

  const getTypes = (value) => {
    dispatch(getProductsByTypes(value));
    dispatch(setType(value));
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
                      String(item.id) === String(newType)
                        ? '/svg/catalogPage/checkbox.svg'
                        : '/svg/catalogPage/emptyCheckbox.svg'
                    }
                    alt={String(item.id) === String(newType) ? 'Checked' : 'Unchecked'}
                  />
                  <input
                    key={item.id}
                    type="radio"
                    name="type"
                    value={item.id}
                    checked={String(item.id) === String(newType)}
                    onChange={(e) => getTypes(e.target.value)}
                  />
                  <p>{item.name}</p>
                </label>
                {console.log(String(item.id) === String(newType))}
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
