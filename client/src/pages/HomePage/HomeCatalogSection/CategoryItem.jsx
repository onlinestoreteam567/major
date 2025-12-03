import { useImageError } from '@hooks/useImageError';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item, getTranslation, getCategory }) => {
  const [imageSrc, handleError] = useImageError(item?.image);

  return (
    <li
      key={item.id}
      id={item.id}
      onClick={(e) => getCategory(e.currentTarget.id)}
      aria-label={`${getTranslation('catalogAriaLabel')}${item.name}`}
    >
      <Link to={`/catalog`}>
        <figure>
          <img src={imageSrc} onError={handleError} alt="" /> <figcaption>{item.name}</figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default CategoryItem;
