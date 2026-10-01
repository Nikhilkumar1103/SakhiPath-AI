import React from 'react';
import { Check, Globe } from 'lucide-react';
import { translations } from '../data/translations';
import { SpeakText } from '../components/SpeakText';

export function Screen2Language({ language, onSelectLanguage, onNext, speakFn, isPlaying }) {
  const t = translations[language] || translations['ta-IN'];

  return (
    <div className="screen-container language-screen">
      <div className="screen-header-group">
        <div className="icon-header-badge">
          <Globe size={32} />
        </div>
        <h2 className="screen-title">{t.selectLangTitle}</h2>
        <p className="screen-subtitle">{t.selectLangSubtitle}</p>
      </div>

      <SpeakText 
        text={language === 'ta-IN' ? "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும். தமிழ் அல்லது ஆங்கிலம்." : "Select your language. Tamil or English."}
        language={language}
        speakFn={speakFn}
        isPlaying={isPlaying}
        autoSpeak={true}
      />

      <div className="language-options-grid">
        <button 
          className={`lang-option-card ${language === 'ta-IN' ? 'selected' : ''}`}
          onClick={() => onSelectLanguage('ta-IN')}
        >
          <div className="lang-flag">🇮🇳</div>
          <div className="lang-info">
            <span className="lang-name-primary">தமிழ்</span>
            <span className="lang-name-secondary">Tamil</span>
          </div>
          {language === 'ta-IN' && <Check size={28} className="check-icon" />}
        </button>

        <button 
          className={`lang-option-card ${language === 'en-IN' ? 'selected' : ''}`}
          onClick={() => onSelectLanguage('en-IN')}
        >
          <div className="lang-flag">🌐</div>
          <div className="lang-info">
            <span className="lang-name-primary">English</span>
            <span className="lang-name-secondary">ஆங்கிலம்</span>
          </div>
          {language === 'en-IN' && <Check size={28} className="check-icon" />}
        </button>
      </div>

      <div className="screen-bottom-action">
        <button className="option-btn variant-yes full-width" onClick={onNext}>
          <span>{t.continueBtn}</span>
        </button>
      </div>
    </div>
  );
}
