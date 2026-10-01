import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';
import { translations } from '../data/translations';
import { SpeakText } from '../components/SpeakText';
import { OptionButton } from '../components/OptionButton';

export function Screen4Confirm({ 
  userQuery, 
  aiResult, 
  language, 
  onConfirmYes, 
  onConfirmNo, 
  speakFn, 
  isPlaying 
}) {
  const t = translations[language] || translations['ta-IN'];

  const voiceScript = aiResult?.summary || t.confirmVoiceScript;

  return (
    <div className="screen-container confirm-screen">
      <div className="ai-badge-header">
        <Sparkles size={24} className="sparkle-icon" />
        <span>Sakhi AI Understanding</span>
      </div>

      <div className="confirm-card">
        <div className="user-query-bubble">
          <span className="query-tag">{language === 'ta-IN' ? 'உங்கள் கேள்வி:' : 'Your request:'}</span>
          <p className="query-text">"{userQuery || t.suggestionEshram}"</p>
        </div>

        <div className="ai-understanding-content">
          <h3 className="confirm-title">{t.confirmTitle}</h3>
          <p className="confirm-service-name">{aiResult?.serviceName || "e-Shram அட்டை பதிவு"}</p>
          <p className="confirm-question">{t.confirmQuestion}</p>
        </div>

        <SpeakText 
          text={voiceScript}
          language={language}
          speakFn={speakFn}
          isPlaying={isPlaying}
          autoSpeak={true}
        />
      </div>

      <div className="confirm-actions-stack">
        <OptionButton variant="yes" icon={Check} onClick={onConfirmYes}>
          {t.yesConfirmBtn}
        </OptionButton>

        <OptionButton variant="no" icon={X} onClick={onConfirmNo}>
          {t.noConfirmBtn}
        </OptionButton>
      </div>
    </div>
  );
}
