import React, { useEffect } from 'react';
import { HelpCircle, Check, Volume2 } from 'lucide-react';
import { VisualCard } from './VisualCard';
import { translations } from '../data/translations';

export function IDontKnowModal({ 
  isOpen, 
  onClose, 
  explanationText, 
  exampleText, 
  visualType, 
  language = 'ta-IN',
  speakFn
}) {
  const t = translations[language] || translations['ta-IN'];

  useEffect(() => {
    if (isOpen && speakFn && explanationText) {
      const fullSpeech = `${t.idkTitle}. ${explanationText}. ${exampleText || ''}`;
      speakFn(fullSpeech, language);
    }
  }, [isOpen, explanationText, exampleText, language, speakFn, t.idkTitle]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="idk-modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="idk-title-badge">
            <HelpCircle size={24} />
            <h3>{t.idkTitle}</h3>
          </div>
          <button 
            className="modal-speech-btn" 
            onClick={() => speakFn(`${explanationText}. ${exampleText || ''}`, language)}
          >
            <Volume2 size={20} />
          </button>
        </div>

        <div className="modal-body">
          {visualType && (
            <div className="modal-visual-wrap">
              <VisualCard type={visualType} />
            </div>
          )}

          <div className="explanation-box">
            <p className="explanation-text">{explanationText}</p>
          </div>

          {exampleText && (
            <div className="example-box">
              <span className="example-tag">{t.idkExampleTitle}</span>
              <p className="example-text">{exampleText}</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="option-btn variant-yes full-width" onClick={onClose}>
            <Check size={24} />
            <span>{t.idkGotItBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
