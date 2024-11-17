import { useState } from 'react';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Paragraph/Paragraph';

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
        {activeText === 'description' && <Paragraph type="body1">{card.description}</Paragraph>}
        {activeText === 'application' && <Paragraph type="body1">{card.application}</Paragraph>}
        {activeText === 'ingredients' && <Paragraph type="body1">{card.ingredients}</Paragraph>}
      </div>
    </div>
  );
}
