import { useState } from 'react';
import cl from './index.module.scss';
import SelectedCategories from './SelectedCategories/SelectedCategories';
import CustomSelectDisplay from './CustomSelectDisplay/CustomSelectDisplay';
import CategoriesList from './OptionsList/OptionsList';
import useClickOutside from '@hooks/admin/useClickOutside';

const CustomMultiSelect = ({ onChange, value, items, onBlur, name, errors, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedValues = Array.isArray(value) ? value : [];
  const wrapperRef = useClickOutside(() => setIsOpen(false));

  return (
    <div className={cl.customMultiSelect} ref={wrapperRef}>
      <SelectedCategories items={items} selectedValues={selectedValues} onChange={onChange} onBlur={onBlur} />
      <CustomSelectDisplay
        name={name}
        isOpen={isOpen}
        placeholder={placeholder}
        setIsOpen={setIsOpen}
        errors={errors}
      />
      {isOpen && (
        <CategoriesList
          selectedValues={selectedValues}
          onChange={onChange}
          errors={errors}
          items={items}
          name={name}
          onBlur={onBlur}
        />
      )}
    </div>
  );
};

export default CustomMultiSelect;
