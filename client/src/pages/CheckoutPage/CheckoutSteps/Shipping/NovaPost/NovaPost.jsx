import { useState } from 'react';
import cl from './index.module.scss';
import Settlement from './Settlement';
import Warehouses from './Warehouses';

const NovaPost = ({ control, errors, setValue }) => {
  const [isResetWarehouses, setIsResetWarehouses] = useState(false);

  return (
    <div className={cl.novaPost}>
      <Settlement setValue={setValue} setIsResetWarehouses={setIsResetWarehouses} control={control} errors={errors} />
      <Warehouses
        isResetWarehouses={isResetWarehouses}
        setIsResetWarehouses={setIsResetWarehouses}
        control={control}
        errors={errors}
      />
    </div>
  );
};
export default NovaPost;
