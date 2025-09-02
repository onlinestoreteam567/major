import cl from './index.module.scss';

export default function AppLoader() {
  return (
    <div className={cl.appLoader}>
      <div className={cl.cloud}></div>
    </div>
  );
}
