import { isDisabledWarehouses, selectWarehouses } from '@redux/selectors';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Controller, useWatch } from 'react-hook-form';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const name = 'warehouse';

const Warehouses = ({ control, errors, isResetWarehouses, setIsResetWarehouses }) => {
  const allWarehouses = useSelector(selectWarehouses);
  const isDisabled = useSelector(isDisabledWarehouses);
  const [filteredWarehouses, setFilteredWarehouses] = useState([]);
  const [isCanDisplayNothingFound, setIsCanDisplayNothingFound] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  const selectedWarehouse = useWatch({ control, name });

  useEffect(() => {
    if (selectedWarehouse) setInputValue(selectedWarehouse);
    if (!selectedWarehouse) {
      setFilteredWarehouses([...allWarehouses]);
      setIsCanDisplayNothingFound(false);
    }
  }, [allWarehouses]);

  useEffect(() => {
    if (isResetWarehouses) setInputValue('');
  }, [isResetWarehouses]);

  const handleFilter = (term) => {
    const filtered = allWarehouses.filter((warehouse) => {
      const fullText = `№${warehouse.number} ${warehouse.address}`.toLowerCase();
      return fullText.includes(term.toLowerCase());
    });

    setFilteredWarehouses(filtered);
    setIsCanDisplayNothingFound(true);
  };

  return (
    <label className={cl.warehouses}>
      <Paragraph type="body1">{getTranslation('warehouseNumber')}:</Paragraph>

      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <input
              type="text"
              placeholder={getTranslation('choose')}
              onChange={(e) => {
                const term = e.target.value;
                setInputValue(term);
                handleFilter(term);
                field.onChange('');
                setIsResetWarehouses(false);
              }}
              value={inputValue}
              disabled={isDisabled}
              className={errors?.[name] && cl.error}
              ref={field.ref}
            />
            <ul>
              {filteredWarehouses.length > 0
                ? filteredWarehouses.map((warehouse, i) => (
                    <li
                      onClick={() => {
                        setFilteredWarehouses([]);
                        setIsCanDisplayNothingFound(false);
                        setInputValue(`№${warehouse.number} ${warehouse.address}`);
                        field.onChange(`№${warehouse.number} ${warehouse.address}`);
                        setIsResetWarehouses(false);
                      }}
                      key={i}
                    >
                      №{warehouse.number} {warehouse.address}
                    </li>
                  ))
                : isCanDisplayNothingFound && <p>{getTranslation('nothingWasFound')}</p>}
            </ul>
          </>
        )}
      />

      {errors?.[name] && <Paragraph type="caption">{getTranslation(errors[name].message)}</Paragraph>}
    </label>
  );
};

export default Warehouses;
