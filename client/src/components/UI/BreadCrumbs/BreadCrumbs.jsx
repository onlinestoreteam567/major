// import { useBreadcrumbs } from '@hooks/useBreadcrumb';
// import { Link } from 'react-router-dom';
// import Crumb from './Crumb';
// import cl from './index.module.scss';
// import useTranslationNamespace from '@hooks/useTranslationNamespace';

// const BreadCrumbs = ({ product }) => {
//   const crumbs = useBreadcrumbs();
//   const { getTranslation } = useTranslationNamespace('common');

//   const renderProductCrumbs = () => (
//     <>
//       <Crumb />
//       <li>
//         <Link to="/catalog">{getTranslation('catalog')}</Link>
//       </li>
//       <Crumb />
//       <li>
//         <Link to="/catalog">{product}</Link>
//       </li>
//     </>
//   );

//   const renderDefaultCrumbs = () =>
//     crumbs.map(({ path, name }, index) => <Crumb path={path} name={name} key={index} />);

//   return (
//     <nav aria-label="breadcrumb" className={cl.breadCrumbNav}>
//       <ol>
//         <li>
//           <Link to="/">{getTranslation('home')}</Link>
//         </li>
//         {product ? renderProductCrumbs() : renderDefaultCrumbs()}
//       </ol>
//     </nav>
//   );
// };

// export default BreadCrumbs;
