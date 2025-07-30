import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { fetchSettlements, fetchWarehouses } from '@redux/novaPost/service';
import { clearSettlements, setIsShowNothing } from '@redux/novaPost/settlementsSlice';
import { clearWarehouses, setDisabled } from '@redux/novaPost/warehousesSlice';
import { selectSettlements, showNothingSettlements } from '@redux/selectors';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
const name = 'settlement';

const Settlement = ({ setValue, control, errors, setIsResetWarehouses }) => {
  const dispatch = useDispatch();
  const settlements = useSelector(selectSettlements);
  const isShowNothing = useSelector(showNothingSettlements);
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  const getTranslate = (settlement) => {
    return `${getTranslation('city')} ${settlement.name} - ${settlement.Oblast} ${getTranslation('obl')}, ${settlement.Raion} ${getTranslation('district')}`;
  };

  const [city, setCity] = useState('');
  const [isCitySelected, setIsCitySelected] = useState(false);

  const handleCityChange = (value) => {
    setCity(value);
    setIsCitySelected(false);
    dispatch(clearWarehouses());
  };

  const selectCity = (cityName, cityRef) => {
    setCity(cityName);
    setIsCitySelected(true);
    dispatch(clearSettlements());
    dispatch(fetchWarehouses(cityRef));
    dispatch(setDisabled(false));
  };

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
      <Paragraph type="body1">{getTranslation('city')}*:</Paragraph>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              type="text"
              placeholder={getTranslation('choose')}
              value={field.value || ''}
              onChange={(e) => {
                const val = e.target.value;
                handleCityChange(val);
                setIsResetWarehouses(true);
                setValue('warehouse', '');
                field.onChange(val);
              }}
              className={errors?.[name] ? cl.error : ''}
              ref={field.ref}
            />

            <div>
              <ul>
                {!isShowNothing ? (
                  settlements.map((settlement, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        selectCity(settlement.name, settlement.ref);
                        field.onChange(getTranslate(settlement));
                      }}
                    >
                      {getTranslate(settlement)}
                    </li>
                  ))
                ) : (
                  <p>{getTranslation('nothingWasFound')}</p>
                )}
              </ul>
            </div>
          </>
        )}
      />

      {errors?.[name] && <Paragraph type="caption">{getTranslation(errors[name].message)}</Paragraph>}
    </label>
  );
};

export default Settlement;
