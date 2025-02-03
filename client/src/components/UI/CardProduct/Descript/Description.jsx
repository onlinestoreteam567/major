import { useState } from 'react';
import cl from './index.module.scss';
import Paragraph from '@UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function Description({ card }) {
  const [activeText, setActiveText] = useState('description');

  const { getTranslation } = useTranslationNamespace('common');
  return (
    <div className={cl.wrapInfo}>
      <div className={cl.wrapBtn}>
        <button
          type="button"
          className={activeText === 'description' ? cl.active : ''}
          onClick={() => setActiveText('description')}
        >
          {getTranslation('description')}
        </button>
        <button
          type="button"
          className={activeText === 'application' ? cl.active : ''}
          onClick={() => setActiveText('application')}
        >
          {getTranslation('use')}
        </button>
        <button
          type="button"
          className={activeText === 'ingredients' ? cl.active : ''}
          onClick={() => setActiveText('ingredients')}
        >
          {getTranslation('ingredients')}
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
