import Button from '@components/UI/Button/Button';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Search from '@components/Icons/Search';
import Basket from '@components/Icons/Basket';
import ButtonClose from '@components/Icons/ButtonClose';
import EllipseSmall from '@components/Icons/EllipseSmall';
import EllipseBig from '@components/Icons/EllipseBig';
import Logo from '@components/Icons/Logo';
import Quality from '@components/Icons/Quality';
import Delivery from '@components/Icons/Delivery';
import Discount from '@components/Icons/Discount';
import ThumbUp from '@components/Icons/ThumbUp';
import ScrollLeft from '@components/Icons/ScrollLeft';
import ScrollRight from '@components/Icons/ScrollRight';
import FilterCheckFalse from '@components/Icons/FilterCheckFalse';
import FilterCheckTrue from '@components/Icons/FilterCheckTrue';
import FilterNew from '@components/Icons/FilterNew';
import FilterFire from '@components/Icons/FilterFire';
import FilterDiscount from '@components/Icons/FilterDiscount';
import FilterTogether from '@components/Icons/FilterTogether';
import FilterFalse from '@components/Icons/FilterFalse';
import FilterTrue from '@components/Icons/FilterTrue';
import FilterSort from '@components/Icons/FilterSort';
import LocationBig from '@components/Icons/LocationBig';
import LocationSmall from '@components/Icons/LocationSmall';
import ArrowUp from '@components/Icons/ArrowUp';
import ArrowDown from '@components/Icons/ArrowDown';
import Phone from '@components/Icons/Phone';
import Facebook from '@components/Icons/Facebook';
import Telegram from '@components/Icons/Telegram';
import Instagram from '@components/Icons/Instagram';
import User from '@components/Icons/User';
import Calendar from '@components/Icons/Calendar';

const Bottom = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <section className={cl.bottom}>
      <p>{getTranslation('showing')}</p>
      <div className={cl.buttonWrapper}>
        <Button variant="secondary">{getTranslation('loadMore')}</Button>
      </div>
      <div>
        <Search />
        <Basket />
        <ButtonClose />
        <EllipseSmall />
        <EllipseBig />
        <button>
          <Logo />
        </button>
        <Quality />
        <Delivery />
        <Discount />
        <ThumbUp />
        <ScrollLeft />
        <ScrollRight />
        <FilterCheckFalse />
        <FilterCheckTrue />
        <FilterNew />
        <FilterFire />
        <FilterDiscount />
        <FilterTogether />
        <FilterFalse />
        <FilterTrue />
        <FilterSort />
        <LocationBig />
        <LocationSmall />
        <ArrowUp />
        <ArrowDown />
        <Phone />
        <Facebook />
        <Telegram />
        <Instagram />
        <User />
        <Calendar />
      </div>
    </section>
  );
};
export default Bottom;
