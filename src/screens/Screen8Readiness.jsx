import React from 'react';
import { CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { translations } from '../data/translations';
import { SpeakText } from '../components/SpeakText';
import { OptionButton } from '../components/OptionButton';

export function Screen8Readiness({ language, eshramFlowData, onProceedToHandoff, speakFn, isPlaying }) {
  const t = translations[language] || translations['ta-IN'];

  const voiceScript = language === 'ta-IN' 
    ? "வாழ்த்துக்கள்! உங்களிடம் e-Shram பதிவு செய்யத் தேவையான அனைத்து ஆவணங்களும் தயாராக உள்ளன. இப்போது நேரடியாக அரசு இணையதளத்திற்குச் செல்லலாம்."
    : "Congratulations! You have all the necessary documents ready for e-Shram registration. You can now proceed to the official government portal.";

  return (
    <div className="screen-container readiness-screen">
      <div className="celebration-badge">
        <Award size={48} className="award-icon" />
      </div>

      <h2 className="screen-title text-center">{t.readinessTitle}</h2>
      <p className="screen-subtitle text-center">{t.readinessSubtitle}</p>

      <SpeakText 
        text={voiceScript}
        language={language}
        speakFn={speakFn}
        isPlaying={isPlaying}
        autoSpeak={true}
      />

      <div className="checklist-card">
        <h4 className="checklist-header">{t.readyChecklistHeader}</h4>
        <ul className="checklist-items-list">
          {eshramFlowData.map((step) => (
            <li key={step.id} className="checklist-item">
              <CheckCircle2 size={24} className="check-icon-green" />
              <span>{step.docName[language] || step.docName['ta-IN']}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="screen-bottom-action">
        <OptionButton variant="yes" onClick={onProceedToHandoff}>
          <span>{t.continueToOfficialBtn}</span>
          <ArrowRight size={24} />
        </OptionButton>
      </div>
    </div>
  );
}
