import { useState } from 'react';
import cl from './index.module.scss';

export default function Description({ card }) {
  const [activeText, setActiveText] = useState('description');

  return (
    <div className={cl.wrapInfo}>
      <div className={cl.wrapBtn}>
        <button
          type="button"
          className={activeText === 'description' ? cl.active : ''}
          onClick={() => setActiveText('description')}
        >
          Опис товару
        </button>
        <button
          type="button"
          className={activeText === 'application' ? cl.active : ''}
          onClick={() => setActiveText('application')}
        >
          Застосування
        </button>
        <button
          type="button"
          className={activeText === 'ingredients' ? cl.active : ''}
          onClick={() => setActiveText('ingredients')}
        >
          Склад
        </button>
      </div>
      <div className={cl.wrapText}>
        {activeText === 'description' && <p>{card.description}</p>}
        {activeText === 'application' && <p>{card.application}</p>}
        {activeText === 'ingredients' && <p>{card.ingredients}</p>}
      </div>
    </div>
  );
}
