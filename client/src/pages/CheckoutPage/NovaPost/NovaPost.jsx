import cl from './index.module.scss';
import Settlement from './Settlement';
import Warehouses from './Warehouses';

const NovaPost = () => {
  return (
    <div className={cl.novaPost}>
      <label htmlFor="">
        <Settlement />
        <Warehouses />
      </label>
    </div>
  );
};
export default NovaPost;
