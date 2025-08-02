import { Link } from 'react-router-dom';
import cl from './index.module.scss';

const PartnerCard = ({ card }) => {
  // const handleDelete = (id) => handleDeleteItem(dispatch, deletePartner, id);

  return (
    <li className={cl.partnerCard}>
      <p>{card.name}</p>
      <div>
        <Link to={`/admin/partners/${card.id}`}>
          <img src="/svg/admin/edit.svg" />
        </Link>
        <button>
          <img src="/svg/admin/delete.svg" alt="More options" />
        </button>
      </div>
    </li>
  );
};
export default PartnerCard;
