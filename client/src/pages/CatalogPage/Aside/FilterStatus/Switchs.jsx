// import { fetchSwitch } from '../redux/products/service';
// import Switch from '@UI/Switch/Switch';
// // import useTranslationNamespace from '@hooks/useTranslationNamespace';
// // import { fetchSwitch } from '@../servicesold/ProductListService';
// import { useDispatch } from 'react-redux';

// const switchItems = [
//   { icon: '/svg/catalogPage/new.svg', label: 'is_new' },
//   { icon: '/svg/catalogPage/fire.svg', label: 'is_best_seller' },
//   { icon: '/svg/catalogPage/discount.svg', label: 'is_discount' },
// ];

// const Switchs = () => {
//   // const { getTranslation } = useTranslationNamespace('catalogPage');
//   const dispatch = useDispatch();

//   const getSwitchs = (type) => {
//     dispatch(fetchSwitch(type));
//   };

//   return (
//     <>
//       {switchItems.map((item) => (
//         <Switch item={item} key={item.label} onChange={getSwitchs} name="switchGroup" />
//       ))}
//     </>
//   );
// };

// export default Switchs;
