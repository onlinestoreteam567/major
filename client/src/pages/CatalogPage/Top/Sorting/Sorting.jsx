import cl from './index.module.scss';
import { useEffect, useState } from 'react';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import Overlay from '@components/UI/Overlay/Overlay';
import useScreenSizes from '@hooks/useScreenSizes';
import SortingButtons from './SortingButtons';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useDispatch, useSelector } from 'react-redux';
import { sorting } from '@redux/selectors';
import { setSorting } from '@redux/filter/filterSlice';

const Sorting = ({ setIsShowMobileSorting }) => {
  const sortingOption = useSelector(sorting);
  console.log(sortingOption);
  const [isHiddenMobileSorting, setisHiddenMobileSorting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sortingOption);
  const { deskmin, deskmax } = useScreenSizes();
  const { getTranslation } = useTranslationNamespace('catalogPage');
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedOption(sortingOption);
  }, [sortingOption]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    dispatch(setSorting(option));
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCloseMobileSorting = () => handleCloseWithDelay(setisHiddenMobileSorting, setIsShowMobileSorting);

  return !(deskmin || deskmax) ? (
    <>
      <Overlay handleClose={handleCloseMobileSorting} />
      <ul className={`${cl.mobileSorting} ${isHiddenMobileSorting ? cl.hiddenAnimation : ''}`}>
        <SortingButtons />
      </ul>
    </>
  ) : (
    <div className={`${cl.dropdown} ${isOpen ? cl.open : ''}`}>
      <button onClick={toggleDropDown}>
        {selectedOption ? getTranslation(selectedOption) : getTranslation('selectAnOption')}
        <img src={'/svg/catalogPage/arrow.svg'} alt="" />
      </button>
      {isOpen && (
        <ul>
          <SortingButtons handleSelect={handleSelect} />
        </ul>
      )}
    </div>
  );
};

export default Sorting;
