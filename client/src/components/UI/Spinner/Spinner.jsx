import cl from './index.module.scss';

export default function Spinner() {
  return (
    <div className={cl.wrapSpinner}>
      <span className={cl.spinner}></span>
    </div>
  );
}
