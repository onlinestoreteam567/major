import UaIcon from '@components/UI/icons/Header/UaIcon';
import cl from './index.module.scss';
import EnIcon from '@components/UI/icons/Header/EnIcon';
import LineSeparator from '@components/UI/icons/LineSeparator';
import { useState } from 'react';

const LangSwitcher = () => {
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);

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
