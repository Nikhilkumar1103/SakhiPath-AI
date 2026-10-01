import React from 'react';
import { ExternalLink, ShieldCheck, RefreshCw, Smartphone, CreditCard, HelpCircle } from 'lucide-react';
import { translations } from '../data/translations';
import { SpeakText } from '../components/SpeakText';
import { OptionButton } from '../components/OptionButton';

export function Screen9Handoff({ language, onStartOver, speakFn, isPlaying }) {
  const t = translations[language] || translations['ta-IN'];

  const officialUrl = "https://eshram.gov.in/";

  const voiceScript = language === 'ta-IN'
    ? "நீங்கள் அதிகாரப்பூர்வ e-Shram அரசு பக்கத்திற்கு செல்லத் தயார். கீழே உள்ள பொத்தானை அழுத்தி அரசு இணையதளத்தைத் திறக்கவும்."
    : "You are ready to proceed to the official e-Shram government portal. Tap the button below to open the website.";

  const handleOpenOfficialSite = () => {
    window.open(officialUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="screen-container handoff-screen">
      <div className="gov-official-badge">
        <ShieldCheck size={32} className="shield-icon" />
        <span>Official Portal Handoff</span>
      </div>

      <h2 className="screen-title text-center">{t.handoffTitle}</h2>
      <p className="screen-subtitle text-center">{t.handoffSubtitle}</p>

      <SpeakText 
        text={voiceScript}
        language={language}
        speakFn={speakFn}
        isPlaying={isPlaying}
        autoSpeak={true}
      />

      <div className="handoff-instructions-card">
        <h4 className="card-instruction-heading">{language === 'ta-IN' ? 'அரசு தளத்தில் என்ன செய்ய வேண்டும்:' : 'What to do on official site:'}</h4>
        
        <div className="instruction-step-item">
          <div className="step-num-pill">1</div>
          <p>{t.handoffInstruction1}</p>
        </div>

        <div className="instruction-step-item">
          <div className="step-num-pill">2</div>
          <p>{t.handoffInstruction2}</p>
        </div>

        <div className="instruction-step-item">
          <div className="step-num-pill">3</div>
          <p>{t.handoffInstruction3}</p>
        </div>
      </div>

      <div className="handoff-action-buttons">
        <OptionButton variant="yes" onClick={handleOpenOfficialSite}>
          <ExternalLink size={24} />
          <span>{t.openOfficialSiteBtn}</span>
        </OptionButton>

        <button className="option-btn variant-no full-width restart-session-btn" onClick={onStartOver}>
          <RefreshCw size={20} />
          <span>{t.finishSessionBtn}</span>
        </button>
      </div>

      <div className="disclaimer-text-footer">
        <p>⚠️ {language === 'ta-IN' 
          ? 'சகிபாத் AI என்பது ஒரு வழிகாட்டுதல் சேவை மட்டுமே. உங்கள் தரவுகள் எதுவும் இங்கு சேமிக்கப்படுவதில்லை.' 
          : 'SakhiPath AI is an accessibility guidance layer. No personal data or form submissions are made on SakhiPath.'}
        </p>
      </div>
    </div>
  );
}
