import cl from './index.module.scss';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import filter from '@svg/catalogPage/filter.svg';
import { useTranslation } from 'react-i18next';

const Top = () => {
  const { t } = useTranslation();
  return (
    <section className={cl.catalogSection}>
      <h2>{t('main title', { ns: 'catalogPage' })}</h2>

      <section className={cl.sortSection}>
        <section>
          <img src={filter} alt="" />
          <h3>{t('sorting', { ns: 'catalogPage' })}:</h3>
        </section>
        <Dropdown
          options={['sort by popularity', 'sort by price asc', 'sort by price desc']}
          onSelect={(option) => console.log(option)}
        />
      </section>
    </section>
  );
};
export default Top;
