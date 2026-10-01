import React, { useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';
import { SpeakText } from '../components/SpeakText';

export function Screen1Welcome({ language, onNext, speakFn, isPlaying }) {
  const t = translations[language] || translations['ta-IN'];

  return (
    <div className="screen-container welcome-screen">
      <div className="welcome-hero-card">
        <div className="hero-avatar">
          <div className="avatar-pulse"></div>
          <span className="avatar-emoji">🌸</span>
        </div>
        <h1 className="welcome-title">{t.welcomeTitle}</h1>
        <p className="welcome-tagline">{t.tagline}</p>
        
        <SpeakText 
          text={t.welcomeVoiceScript}
          language={language}
          speakFn={speakFn}
          isPlaying={isPlaying}
          autoSpeak={true}
          className="hero-speak-box"
        />
      </div>

      <div className="welcome-features">
        <div className="feature-pill">
          <span className="feat-icon">🎙️</span>
          <span>குரல் மூலம் பேசுங்கள் (Voice First)</span>
        </div>
        <div className="feature-pill">
          <span className="feat-icon">👣</span>
          <span>ஒவ்வொரு படியாக வழிகாட்டல்</span>
        </div>
        <div className="feature-pill">
          <span className="feat-icon">❓</span>
          <span>'எனக்கு தெரியாது' என்று கேட்கலாம்</span>
        </div>
      </div>

      <div className="screen-bottom-action">
        <button className="option-btn variant-yes full-width get-started-btn" onClick={onNext}>
          <span>{t.getStartedBtn}</span>
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
