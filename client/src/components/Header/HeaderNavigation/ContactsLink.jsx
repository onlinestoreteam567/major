import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ContactsLink = ({ scrollToFooter, onClick }) => {
  const { getTranslation } = useTranslationNamespace('header');
  const [isTemporarilyActive, setIsTemporarilyActive] = useState(false);

  const handleLinkClick = () => {
    scrollToFooter();
    onClick && onClick();

    setIsTemporarilyActive(true);
    setTimeout(() => {
      setIsTemporarilyActive(false);
    }, 3000);
  };

  const isLinkActive = isTemporarilyActive;

  return (
    <NavLink
      to={'#footer'}
      onClick={handleLinkClick}
      aria-label={getTranslation(`ariaLabel${'contact'}`)}
      className={isLinkActive ? cl.activeLink : ''}
    >
      {getTranslation('contact')}
    </NavLink>
  );
};

export default ContactsLink;
