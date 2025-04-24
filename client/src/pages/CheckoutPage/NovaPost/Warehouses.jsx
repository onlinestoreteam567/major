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

  useEffect(() => {
    setFilteredWarehouses([...allWarehouses]);
    setSearchTerm('');
  }, [allWarehouses]);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = allWarehouses.filter((warehouse) => warehouse.address.toLowerCase().includes(term.toLowerCase()));
    setFilteredWarehouses(filtered);
  };

  const handleListItemClick = (address) => {
    setFilteredWarehouses([]);
    setSearchTerm(address);
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
        ) : (
          filteredWarehouses.length > 0 &&
          filteredWarehouses.map((warehouse, i) => (
            <li onClick={() => handleListItemClick(warehouse.address)} key={i}>
              {warehouse.address}
            </li>
          ))
        )}
      </ul>
    </label>
  );
};
export default Warehouses;
