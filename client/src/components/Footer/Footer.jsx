import FooterCopyrightSection from '@components/Footer/FooterCopyrightSection/FooterCopyrightSection';
import FooterTopSection from '@components/Footer/FooterTopSection/FooterTopSection';
import cl from './index.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '@redux/contacts/service';
import { loadContacts, selectContacts } from '@redux/selectors';
import Spinner from '@components/UI/Spinner/Spinner';

const Footer = ({ footerRef }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(loadContacts);
  const contacts = useSelector(selectContacts);

  return (
    <footer ref={footerRef} className={cl.footer}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FooterTopSection contacts={contacts} />
          <FooterCopyrightSection contacts={contacts} />
        </>
      )}
    </footer>
  );
};

export default Footer;
