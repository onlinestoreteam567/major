import { isDisabledWarehouses, selectWarehouses } from '@redux/selectors';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Controller } from 'react-hook-form';

const name = 'warehouse';

const Warehouses = ({ control, errors }) => {
  const allWarehouses = useSelector(selectWarehouses);
  const isDisabled = useSelector(isDisabledWarehouses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWarehouses, setFilteredWarehouses] = useState([]);
  const [isCanDisplayNothingFound, setIsCanDisplayNothingFound] = useState(false);

  useEffect(() => {
    setFilteredWarehouses([...allWarehouses]);
    setSearchTerm('');
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
        render={({ field }) => (
          <input
            type="text"
            placeholder="- оберіть -"
            value={searchTerm}
            onChange={(e) => {
              const term = e.target.value;
              setSearchTerm(term);
              handleFilter(term);
              field.onChange(term); // Update RHF state
            }}
            disabled={isDisabled}
            className={errors?.[name] && cl.error}
            ref={field.ref}
          />
        )}
      />

      <ul>
        {filteredWarehouses.length > 0
          ? filteredWarehouses.map((warehouse, i) => (
              <li
                onMouseDown={() => {
                  setSearchTerm(warehouse.address);
                  setFilteredWarehouses([]);
                  setIsCanDisplayNothingFound(false);
                }}
                key={i}
              >
                №{warehouse.number} {warehouse.address}
              </li>
            ))
          : isCanDisplayNothingFound && <p>Нічого не знайдено</p>}
      </ul>

      {errors?.[name] && <p style={{ color: 'red' }}>{errors[name].message}</p>}
    </label>
  );
};

export default Warehouses;
