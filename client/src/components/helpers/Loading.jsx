import cl from './index.module.scss';

export default function Loading() {
  return (
    <div className={cl.wrapper}>
      <div className={cl.cloud}></div>
      {/* <div className={cl.dotts}></div> */}
    </div>
  );
}
