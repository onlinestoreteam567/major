import cl from './index.module.scss';
import Settlement from './Settlement';
import Warehouses from './Warehouses';

const NovaPost = ({ control, errors }) => {
  return (
    <div className={cl.novaPost}>
      <Settlement control={control} errors={errors} />
      <Warehouses control={control} errors={errors} />
    </div>
  );
};
export default NovaPost;
