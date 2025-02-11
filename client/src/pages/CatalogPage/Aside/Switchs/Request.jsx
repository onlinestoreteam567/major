import { fetchSwitch } from '@services/switchService';
import { useDispatch } from 'react-redux';
import Switchs from './Switchs';

const Request = () => {
  const dispatch = useDispatch();

  const getFilter = (value) => {
    dispatch(fetchSwitch(value));
  };
  // const dispatch = useDispatch();
  return (
    <div>
      {/* <Switchs getFilter={getFilter} /> */}

      <div>Categories</div>
      <div>
        <div>Switch Types</div>
        <div>List</div>
      </div>
    </div>
  );
};

export default Request;
