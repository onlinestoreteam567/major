import cl from '../index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@UI/Texts/Heading/Heading';

import { FormGroup } from '@components/form-components';
import { useDispatch, useSelector } from 'react-redux';

import { loadTypes, selectTypes } from '../../../../redux/selectors';
import EmptyPage from '@components/helpers/EmptyPage';
import Spinner from '@components/helpers/Spinner';
import { getProductsByTypes } from '../../../../redux/products/service';

export default function FilterByType() {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const dispatch = useDispatch();

  const isLoading = useSelector(loadTypes);
  const items = useSelector(selectTypes);

  const getTypes = (value) => {
    dispatch(getProductsByTypes(value));
  };
  const showArr = Array.isArray(items) && items.length !== 0;
  return (
    <FormGroup className={cl.checkboxesWrapper} name={'category'}>
      <Heading type="h4">{getTranslation('category')}</Heading>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {showArr ? (
            items.map((item) => (
              <li key={item.id}>
                <input
                  type="radio"
                  id={item.id}
                  name="types"
                  value={item.id}
                  onChange={(e) => getTypes(e.target.value)}
                />
                <label htmlFor={item.id}>{item.name}</label>
              </li>
            ))
          ) : (
            <EmptyPage message="Не знайдено" />
          )}
        </ul>
      )}
    </FormGroup>
  );
}
