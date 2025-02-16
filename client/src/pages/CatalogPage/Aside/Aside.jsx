import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import useScreenSizes from '@hooks/useScreenSizes';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
// import Switch from '@components/UI/Switch/Switch';
// import PurposeCategories from './Purpose/PurposeCategories';
// import Types from './FilterType/Types';
import FilterByType from './FilterType/FilterByType';
import FilterByStatus from './FilterStatus/FilterByStatus';
import FilterByPrice from './FilterPrice/FilterByPrice';

const Aside = ({ setIsAsideMobile, isHiddenAside, setisHiddenAside }) => {
  const { deskmin, deskmax } = useScreenSizes();

  const handleCloseAside = () => {
    handleCloseWithDelay(setisHiddenAside, setIsAsideMobile);
  };

  return (
    <aside className={`${cl.aside} ${isHiddenAside ? cl.hiddenAnimation : ''}`}>
      {!(deskmin || deskmax) && (
        <section className={cl.topSection}>
          <Heading type="h2">Фільтри</Heading>
          <ButtonClose onClick={() => handleCloseAside()} />
        </section>
      )}

      {/* <Request /> */}
      {/* <Switchs /> */}
      {/* <PurposeCategories /> */}
      {/* <Types /> */}
      <FilterByStatus />
      <FilterByPrice />
      <FilterByType />
    </aside>
  );
};

export default Aside;
