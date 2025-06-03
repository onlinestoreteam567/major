import Spinner from '@components/helpers/Spinner/Spinner';
import { isDisabledWarehouses, loadWarehouses, selectWarehouses } from '@redux/selectors';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import cl from './index.module.scss';

const Warehouses = () => {
  const isLoading = useSelector(loadWarehouses);
  const allWarehouses = useSelector(selectWarehouses);
  const isDisabled = useSelector(isDisabledWarehouses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWarehouses, setFilteredWarehouses] = useState([]);
  const [isCanDisplayNothingFound, setIsCanDisplayNothingFound] = useState(false);

  useEffect(() => {
    setFilteredWarehouses([...allWarehouses]);
    setSearchTerm('');
  }, [allWarehouses]);

  const handleInputChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = allWarehouses.filter((warehouse) => {
      const fullText = `№${warehouse.number} ${warehouse.address}`.toLowerCase();
      return fullText.includes(term);
    });

    setFilteredWarehouses(filtered);
    setIsCanDisplayNothingFound(true);
  };

  const handleListItemClick = (address) => {
    setFilteredWarehouses([]);
    setSearchTerm(address);
    setIsCanDisplayNothingFound(false);
  };

  return (
    <label className={cl.warehouses}>
      <input
        type="text"
        placeholder="Введіть адресу або номер відділення"
        value={searchTerm}
        onChange={handleInputChange}
        disabled={isDisabled}
      />
      <ul>
        {isLoading ? (
          <Spinner />
        ) : filteredWarehouses.length > 0 ? (
          filteredWarehouses.map((warehouse, i) => (
            <li onMouseDown={() => handleListItemClick(warehouse.address)} key={i}>
              №{warehouse.number} {warehouse.address}
            </li>
          ))
        ) : (
          isCanDisplayNothingFound && <p>Нічого не знайдено</p>
        )}
      </ul>
    </label>
  );
};
export default Warehouses;
