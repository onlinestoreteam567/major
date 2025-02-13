import { fetchSwitch } from '@services/switchService';
import { useDispatch } from 'react-redux';
import Switchs from './Switchs';
import { useState, useEffect } from 'react';
import PurposeCategories from '../Purpose/PurposeCategories';
import { fetchProductList } from '@services/ProductListService';
import Types from '../Types/Types';

const Request = () => {
  const [activeFilter, setActiveFilter] = useState(null); // Store only one active filter
  const dispatch = useDispatch();

  const toggleFilter = (value) => {
    setActiveFilter((prev) => (prev === value ? null : value)); // Toggle selection
  };

  const clearFilters = () => {
    setActiveFilter(null);
  };

  useEffect(() => {
    if (activeFilter) {
      dispatch(fetchSwitch(activeFilter));
    } else {
      dispatch(fetchProductList());
    }
  }, [activeFilter, dispatch]);

  return (
    <div>
      <PurposeCategories toggleFilter={toggleFilter} />
      <aside>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={clearFilters} disabled={!activeFilter}>
          Зняти фільтри
        </button>
        <Switchs activeFilter={activeFilter} toggleFilter={toggleFilter} />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Types />
      </aside>
    </div>
  );
};

export default Request;
