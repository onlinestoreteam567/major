import cl from './index.module.scss';
import Settlement from './Settlement';
import Warehouses from './Warehouses';

const NovaPost = () => {
  return (
    <div className={cl.novaPost}>
      <Settlement />
      <Warehouses />
    </div>
  );
};
export default NovaPost;
