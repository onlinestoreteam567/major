import cl from './index.module.scss';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import filter from '@svg/catalogPage/filter.svg';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import H2 from '@components/UI/Hs/H2/H2';

const Top = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <section className={cl.catalogSection}>
      <H2>{getTranslation('catalog', 'common')}</H2>

      <section className={cl.sortSection}>
        <section>
          <img src={filter} alt="" />
          <h3>{getTranslation('sorting')}:</h3>
        </section>
        <Dropdown
          options={['sortByPopularity', 'sortByPriceAsc', 'sortByPriceDesc']}
          onSelect={(option) => console.log(option)}
        />
      </section>
    </section>
  );
};
export default Top;
