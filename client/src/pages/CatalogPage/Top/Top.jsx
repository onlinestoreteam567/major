import cl from './index.module.scss';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import filter from '@svg/catalogPage/filter.svg';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Top = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <section className={cl.catalogSection}>
      <h2>{getTranslation('catalog', 'common')}</h2>

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
