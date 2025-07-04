import getSelectedItemsNames from '../handlers/getSelectedItemsNames';
import handleToggleOption from '../handlers/handleToggleOption';
import cl from './index.module.scss';

const SelectedCategories = ({ selectedValues, items, onChange, onBlur }) => {
  const displayedItems = getSelectedItemsNames(selectedValues, items);

  return (
    <ul className={cl.selectedItems}>
      {displayedItems.map((item) => (
        <li key={item.id} className={cl.selectedItemTag}>
          {item.name}
          <button
            type="button"
            onClick={(e) => handleToggleOption(e, String(item.id), selectedValues, onChange, onBlur)}
          >
            <img src="/svg/admin/cross.svg" />
          </button>
        </li>
      ))}
    </ul>
  );
};
export default SelectedCategories;
