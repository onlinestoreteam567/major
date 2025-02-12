import { fetchSwitch } from '@services/switchService';
import { useDispatch } from 'react-redux';
import Switchs from './Switchs';
import { useState, useEffect } from 'react';
import PurposeCategories from '../Purpose/PurposeCategories';

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
    }
  }, [activeFilter, dispatch]);

  return (
    <div>
      <aside>
        <button onClick={clearFilters} disabled={!activeFilter}>
          Зняти фільтри
        </button>
        <Switchs activeFilter={activeFilter} toggleFilter={toggleFilter} />
        <PurposeCategories />
      </aside>
    </div>
  );
};

export default Request;
