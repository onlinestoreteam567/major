import cl from './index.module.scss';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Heading from '@components/UI/Heading/Heading';

const Top = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <section className={cl.catalogSection}>
      <Heading type="h2">{getTranslation('catalog', 'common')}</Heading>

      <section className={cl.sortSection}>
        <section>
          <img src={'svg/catalogPage/filter.svg'} alt="" />
          <Heading type="h4">{getTranslation('sorting')}:</Heading>
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
