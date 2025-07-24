import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettlements, fetchWarehouses } from '@redux/novaPost/service';
import { selectSettlements, showNothingSettlements } from '@redux/selectors';
import { clearSettlements, setIsShowNothing } from '@redux/novaPost/settlementsSlice';
import { clearWarehouses, setDisabled } from '@redux/novaPost/warehousesSlice';
import { useEffect, useState, useCallback } from 'react';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Controller } from 'react-hook-form';

const name = 'settlement';

const Settlement = ({ control, errors }) => {
  const dispatch = useDispatch();
  const settlements = useSelector(selectSettlements);
  const isShowNothing = useSelector(showNothingSettlements);

  const [city, setCity] = useState('');
  const [isCitySelected, setIsCitySelected] = useState(false);

  const handleCityChange = (value) => {
    setCity(value);
    setIsCitySelected(false);
    dispatch(clearWarehouses());
  };

  const selectCity = (cityName, cityRef, onChange) => {
    setCity(cityName);
    setIsCitySelected(true);
    dispatch(clearSettlements());
    dispatch(fetchWarehouses(cityRef));
    dispatch(setDisabled(false));
    onChange(cityName); // Update RHF value
  };

  // Debounced city fetch
  const debouncedSearch = useCallback(
    debounce((cityToSearch) => {
      dispatch(fetchSettlements(cityToSearch));
    }, 1000),
    [dispatch]
  );

  useEffect(() => {
    if (city === '' || isCitySelected) {
      dispatch(setIsShowNothing(false));
      return;
    }

    debouncedSearch(city.trim());

    return () => {
      debouncedSearch.cancel();
    };
  }, [city, isCitySelected, debouncedSearch, dispatch]);

  return (
    <label className={cl.settlement}>
      <Paragraph type="body1">Місто*:</Paragraph>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="text"
            placeholder="- оберіть -"
            value={city}
            onChange={(e) => {
              const val = e.target.value;
              handleCityChange(val);
              field.onChange(val); // RHF update
            }}
            className={errors?.[name] && cl.error}
            ref={field.ref}
          />
        )}
      />

      <div>
        <ul>
          {!isShowNothing ? (
            settlements.map((settlement, i) => (
              <li
                key={i}
                onMouseDown={() =>
                  selectCity(
                    settlement.name,
                    settlement.ref,
                    control._formValues[name] === settlement.name ? () => {} : (val) => control.setValue(name, val)
                  )
                }
              >
                Місто {settlement.name} - {settlement.Oblast} обл., {settlement.Raion} р-н.
              </li>
            ))
          ) : (
            <p>Нічого не знайдено</p>
          )}
        </ul>
      </div>

      {errors?.[name] && <Paragraph type="caption">{errors[name].message}</Paragraph>}
    </label>
  );
};

export default Settlement;
