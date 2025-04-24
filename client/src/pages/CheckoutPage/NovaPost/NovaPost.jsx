import cl from './index.module.scss';
import Settlement from './Settlement';

const NovaPost = () => {
  return (
    <div className={cl.novaPost}>
      <label htmlFor="">
        <Settlement />
        <input type="text" />
      </label>
    </div>
  );
};
export default NovaPost;
