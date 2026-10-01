import React, { useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { translations } from '../data/translations';

export function SpeakText({ 
  text, 
  language = 'ta-IN', 
  speakFn, 
  isPlaying = false,
  autoSpeak = true,
  className = ''
}) {
  const t = translations[language] || translations['ta-IN'];

  useEffect(() => {
    if (autoSpeak && speakFn && text) {
      speakFn(text, language);
    }
  }, [text, language, autoSpeak, speakFn]);

  const handleReplay = (e) => {
    e.stopPropagation();
    if (speakFn && text) {
      speakFn(text, language);
    }
  };

  return (
    <div className={`speak-text-container ${className}`}>
      <div className="speak-content">
        <p className="speak-paragraph">{text}</p>
      </div>
      <button 
        className={`replay-btn ${isPlaying ? 'playing' : ''}`}
        onClick={handleReplay}
        title={t.listenAgain}
      >
        <Volume2 size={20} className={isPlaying ? 'wave-anim' : ''} />
        <span>{t.listenAgain}</span>
      </button>
    </div>
  );
}
