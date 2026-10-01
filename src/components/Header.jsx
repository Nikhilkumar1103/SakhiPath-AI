import React from 'react';
import { Volume2, VolumeX, ArrowLeft, RotateCcw, Globe } from 'lucide-react';
import { translations } from '../data/translations';

export function Header({ 
  currentScreen, 
  language, 
  onToggleLanguage, 
  onBack, 
  onRestart, 
  isAudioEnabled, 
  onToggleAudio 
}) {
  const t = translations[language] || translations['ta-IN'];
  const showBack = currentScreen !== 'WELCOME' && currentScreen !== 'LANGUAGE';

  return (
    <header className="app-header">
      <div className="header-top">
        {showBack ? (
          <button 
            className="icon-btn back-btn" 
            onClick={onBack}
            aria-label={t.back}
            title={t.back}
          >
            <ArrowLeft size={22} />
            <span className="btn-text-sm">{t.back}</span>
          </button>
        ) : (
          <div className="brand-logo">
            <span className="logo-icon">🌸</span>
            <span className="brand-name">{t.appName}</span>
          </div>
        )}

        {showBack && (
          <div className="brand-logo mini-logo">
            <span className="brand-name">{t.appName}</span>
          </div>
        )}

        <div className="header-controls">
          <button 
            className={`lang-pill ${language === 'en-IN' ? 'en' : 'ta'}`}
            onClick={onToggleLanguage}
            title={t.languageToggle}
          >
            <Globe size={16} />
            <span>{t.languageToggle}</span>
          </button>

          <button 
            className={`icon-btn audio-btn ${isAudioEnabled ? 'active' : 'muted'}`}
            onClick={onToggleAudio}
            aria-label={isAudioEnabled ? t.audioOn : t.audioOff}
            title={isAudioEnabled ? t.audioOn : t.audioOff}
          >
            {isAudioEnabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
          </button>

          {showBack && (
            <button 
              className="icon-btn restart-btn" 
              onClick={onRestart}
              title={t.restart}
            >
              <RotateCcw size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
