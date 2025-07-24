import { isDisabledWarehouses, selectWarehouses } from '@redux/selectors';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Controller, useWatch } from 'react-hook-form';

const name = 'warehouse';

const Warehouses = ({ control, errors }) => {
  const allWarehouses = useSelector(selectWarehouses);
  const isDisabled = useSelector(isDisabledWarehouses);
  const [filteredWarehouses, setFilteredWarehouses] = useState([]);
  const [isCanDisplayNothingFound, setIsCanDisplayNothingFound] = useState(false);

  const selectedWarehouse = useWatch({ control, name });

  useEffect(() => {
    if (!selectedWarehouse) {
      setFilteredWarehouses([...allWarehouses]);
      setIsCanDisplayNothingFound(false);
    }
  }, [allWarehouses]);

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
      <Paragraph type="body1">Відділення №*:</Paragraph>

      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <input
              type="text"
              placeholder="- оберіть -"
              value={field.value}
              onChange={(e) => {
                const term = e.target.value;
                handleFilter(term);
                field.onChange(term);
              }}
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

                        field.onChange(`№${warehouse.number} ${warehouse.address}`);
                      }}
                      key={i}
                    >
                      №{warehouse.number} {warehouse.address}
                    </li>
                  ))
                : isCanDisplayNothingFound && <p>Нічого не знайдено</p>}
            </ul>
          </>
        )}
      />

      {errors?.[name] && <Paragraph type="caption">{errors[name].message}</Paragraph>}
    </label>
  );
};

export default Warehouses;
