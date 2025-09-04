import UaIcon from '@components/UI/icons/Header/UaIcon';
import cl from './index.module.scss';
import EnIcon from '@components/UI/icons/Header/EnIcon';
import LineSeparator from '@components/UI/icons/LineSeparator';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [isLanguageDefault, setIsLanguageDefault] = useState(i18n.language === 'ua');

  return (
    <section className={cl.langSwitcher}>
      <UaIcon
        fillColor={isLanguageDefault ? '#000000' : '#A2A2A2'}
        setIsLanguageDefault={setIsLanguageDefault}
        isNavDrawer={true}
      />
      <LineSeparator fillColor={'#A2A2A2'} />
      <EnIcon
        fillColor={!isLanguageDefault ? '#000000' : '#A2A2A2'}
        setIsLanguageDefault={setIsLanguageDefault}
        isNavDrawer={true}
      />
    </section>
  );
};

export default LangSwitcher;
