import debouce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettlements } from '@redux/novaPost/service';
import { loadSettlements, selectSettlements } from '@redux/selectors';
import { clearSettlements } from '@redux/novaPost/settlementsSlice';
import { useEffect, useState } from 'react';
import Spinner from '@components/helpers/Spinner/Spinner';

const Settlement = () => {
  const [city, setCity] = useState('');
  const [isCitySelected, setIsCitySelected] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(loadSettlements);
  const settlements = useSelector(selectSettlements);

  const cityChange = (e) => {
    setIsCitySelected(false);
    setCity(e.target.value);
  };

  const selectCity = (e) => {
    setIsCitySelected(true);
    setCity(e.target.innerHTML);
    dispatch(clearSettlements());
  };

  useEffect(() => {
    if (city === '' || isCitySelected) return;
    const debouncedSearch = debouce(() => {
      dispatch(fetchSettlements(city.trim()));
    }, 1000);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [isCitySelected, city, dispatch]);

  return (
    <label htmlFor="">
      <input type="text" value={city} onChange={cityChange} placeholder="Вибіріть своє місто" />
      <div>
        <ul>
          {isLoading ? (
            <Spinner />
          ) : (
            settlements.map((settlement, i) => (
              <li key={i} onClick={selectCity}>
                Місто {settlement.name} - {settlement.Oblast} обл., {settlement.Raion} р-н.
              </li>
            ))
          )}
        </ul>
      </div>
    </label>
  );
};
export default Settlement;
