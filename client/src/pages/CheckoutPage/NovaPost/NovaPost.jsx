import { useEffect, useState } from 'react';
import cl from './index.module.scss';
import debouce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettlements } from '@redux/novaPost/service';
import { loadSettlements, selectSettlements } from '@redux/selectors';
import { clearSettlements } from '@redux/novaPost/settlementsSlice';

const NovaPost = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(loadSettlements);
  const settlements = useSelector(selectSettlements);

  const cityChange = (e) => setCity(e.target.value);
  const selectCity = (settlement) => {
    setCity(settlement.target.innerHTML);
    dispatch(clearSettlements());
  };

  useEffect(() => {
    const debouncedSearch = debouce(() => {
      dispatch(fetchSettlements(city.trim()));
    }, 1000);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [city, dispatch]);

  return (
    <div className={cl.novaPost}>
      <label htmlFor="">
        <input type="text" value={city} onChange={cityChange} placeholder="Вибіріть своє місто" />
        <div>
          <ul>
            {settlements.map((settlement, i) => (
              <li
                key={i}
                onClick={(settlement) => {
                  selectCity(settlement);
                }}
              >
                Місто {settlement.name} - {settlement.Oblast} обл., {settlement.Raion} р-н.
              </li>
            ))}
          </ul>
        </div>
      </label>
      <label htmlFor="">
        <input type="text" />
      </label>
    </div>
  );
};
export default NovaPost;
