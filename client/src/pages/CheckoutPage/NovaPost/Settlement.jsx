import debouce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettlements, fetchWarehouses } from '@redux/novaPost/service';
import { loadSettlements, selectSettlements, showNothingSettlements } from '@redux/selectors';
import { clearSettlements, setIsShowNothing } from '@redux/novaPost/settlementsSlice';
import { useEffect, useState } from 'react';
import Spinner from '@components/helpers/Spinner/Spinner';
import cl from './index.module.scss';
import { clearWarehouses, setDisabled } from '@redux/novaPost/warehousesSlice';

const Settlement = () => {
  const [city, setCity] = useState('');
  const [isCitySelected, setIsCitySelected] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(loadSettlements);
  const settlements = useSelector(selectSettlements);
  const isShowNothing = useSelector(showNothingSettlements);

  const cityChange = (e) => {
    setCity(e.target.value);
    setIsCitySelected(false);
    dispatch(clearWarehouses());
  };

  const selectCity = (e, cityRef) => {
    setIsCitySelected(true);
    setCity(e.target.innerHTML);
    dispatch(clearSettlements());
    dispatch(fetchWarehouses(cityRef));
    dispatch(setDisabled(false));
  };

  useEffect(() => {
    if (city === '' || isCitySelected) {
      dispatch(setIsShowNothing(false));
      return;
    }

    const debouncedSearch = debouce(() => {
      dispatch(fetchSettlements(city.trim()));
    }, 1000);

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [isCitySelected, city, dispatch]);

  return (
    <label className={cl.settlement}>
      <input type="text" value={city} onChange={cityChange} placeholder="Вибіріть своє місто" />
      <div>
        <ul>
          {isLoading ? (
            <Spinner />
          ) : !isShowNothing ? (
            settlements.map((settlement, i) => (
              <li key={i} onMouseDown={(e) => selectCity(e, settlement.ref)}>
                Місто {settlement.name} - {settlement.Oblast} обл., {settlement.Raion} р-н.
              </li>
            ))
          ) : (
            <p>Нічого не знайдено</p>
          )}
        </ul>
      </div>
    </label>
  );
};
export default Settlement;
