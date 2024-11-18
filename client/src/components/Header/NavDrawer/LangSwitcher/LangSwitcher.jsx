import UaIcon from '@assets/svg/header/UaIcon';
import cl from './index.module.scss';
import EnIcon from '@assets/svg/header/EnIcon';
import LineSeparator from '@assets/svg/LineSeparator';
import { useState } from 'react';

const LangSwitcher = () => {
  const [isLanguageDefault, setIsLanguageDefault] = useState(true);

  return (
    <section className={cl.langSwitcher}>
      <UaIcon fillColor={isLanguageDefault ? '#A2A2A2' : '#000000'} setIsLanguageDefault={setIsLanguageDefault} />
      <LineSeparator fillColor={'#A2A2A2'} />
      <EnIcon fillColor={!isLanguageDefault ? '#A2A2A2' : '#000000'} setIsLanguageDefault={setIsLanguageDefault} />
    </section>
  );
};
export default LangSwitcher;
