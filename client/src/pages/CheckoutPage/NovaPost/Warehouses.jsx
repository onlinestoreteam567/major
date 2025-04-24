import Spinner from '@components/helpers/Spinner/Spinner';
import { loadWarehouses, selectWarehouses } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { clearWarehouses } from '@redux/novaPost/warehousesSlice';

const Warehouses = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadWarehouses);
  const allWarehouses = useSelector(selectWarehouses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWarehouses, setFilteredWarehouses] = useState([]);

  useEffect(() => {
    setFilteredWarehouses([...allWarehouses]);
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
    dispatch(clearWarehouses());
  };

  return (
    <label htmlFor="">
      <input
        type="text"
        placeholder="Введіть адресу або номер відділення"
        value={searchTerm}
        onChange={handleInputChange}
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
