import cl from './index.module.scss';

export default function Volume({ card }) {
  return <div className={cl.wrapVolume}>{card.volume_ml} ml</div>;
}
