import FooterCopyrightSection from '@components/Footer/FooterCopyrightSection/FooterCopyrightSection';
import FooterTopSection from '@components/Footer/FooterTopSection/FooterTopSection';
import cl from './index.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '@redux/contacts/service';
import { selectContacts } from '@redux/selectors';

const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  return (
    <footer className={cl.footer}>
      <FooterTopSection contacts={contacts} />
      <FooterCopyrightSection contacts={contacts} />
    </footer>
  );
};

export default Footer;
