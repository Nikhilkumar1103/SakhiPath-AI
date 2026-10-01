import React, { useState, useEffect } from 'react';
import { Check, X, HelpCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { translations } from '../data/translations';
import { StepProgress } from '../components/StepProgress';
import { SpeakText } from '../components/SpeakText';
import { VisualCard } from '../components/VisualCard';
import { OptionButton } from '../components/OptionButton';
import { IDontKnowModal } from '../components/IDontKnowModal';

export function Screen5Guidance({ 
  currentStepData, 
  currentStepIndex, 
  totalSteps, 
  language, 
  onAnswerYes, 
  onAnswerNo, 
  onAnswerIDK, 
  onPrevStep,
  speakFn, 
  isPlaying 
}) {
  const t = translations[language] || translations['ta-IN'];
  const [showNoAdvice, setShowNoAdvice] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Reset internal sub-states when step changes
    setShowNoAdvice(false);
    setIsModalOpen(false);
  }, [currentStepIndex]);

  const stepTitle = currentStepData?.title[language] || currentStepData?.title['ta-IN'];
  const stepAudioScript = currentStepData?.audioScript[language] || currentStepData?.audioScript['ta-IN'];
  const idkExplanation = currentStepData?.idkExplanation[language] || currentStepData?.idkExplanation['ta-IN'];
  const idkExample = currentStepData?.idkExample[language] || currentStepData?.idkExample['ta-IN'];
  const adviceIfNo = currentStepData?.adviceIfNo[language] || currentStepData?.adviceIfNo['ta-IN'];
  const docName = currentStepData?.docName[language] || currentStepData?.docName['ta-IN'];

  const handleNoClick = () => {
    setShowNoAdvice(true);
    if (speakFn && adviceIfNo) {
      speakFn(adviceIfNo, language);
    }
  };

  const handleIDKClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="screen-container guidance-screen">
      <StepProgress 
        currentStep={currentStepIndex + 1} 
        totalSteps={totalSteps} 
        language={language} 
      />

      {!showNoAdvice ? (
        <>
          <div className="guidance-question-card">
            <h2 className="step-question-text">{stepTitle}</h2>
            <SpeakText 
              text={stepAudioScript}
              language={language}
              speakFn={speakFn}
              isPlaying={isPlaying}
              autoSpeak={true}
            />
          </div>

          <VisualCard 
            type={currentStepData?.visualType} 
            docName={docName} 
          />

          <div className="three-button-action-group">
            <OptionButton 
              variant="yes" 
              icon={Check} 
              onClick={onAnswerYes}
            >
              {t.yesBtn}
            </OptionButton>

            <OptionButton 
              variant="no" 
              icon={X} 
              onClick={handleNoClick}
            >
              {t.noBtn}
            </OptionButton>

            <OptionButton 
              variant="idk" 
              icon={HelpCircle} 
              onClick={handleIDKClick}
            >
              {t.idkBtn}
            </OptionButton>
          </div>

          {currentStepIndex > 0 && (
            <div className="guidance-nav-footer">
              <button className="text-link-btn" onClick={onPrevStep}>
                <ArrowLeft size={18} />
                <span>{t.prevBtn}</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="no-advice-card">
          <div className="advice-header-icon">
            <X size={36} className="x-icon" />
          </div>
          <h3 className="advice-title">{language === 'ta-IN' ? 'வழிகாட்டல் செய்தி:' : 'Helpful Advice:'}</h3>
          
          <SpeakText 
            text={adviceIfNo}
            language={language}
            speakFn={speakFn}
            isPlaying={isPlaying}
            autoSpeak={true}
          />

          <div className="advice-actions-group">
            <button className="option-btn variant-yes full-width" onClick={() => setShowNoAdvice(false)}>
              <RefreshCw size={20} />
              <span>{language === 'ta-IN' ? 'மீண்டும் முயற்சிக்கவும்' : 'Try Again'}</span>
            </button>

            <button className="option-btn variant-idk full-width" onClick={() => setIsModalOpen(true)}>
              <HelpCircle size={20} />
              <span>{t.idkBtn}</span>
            </button>
          </div>
        </div>
      )}

      {/* "I Don't Know" Modal Explanation */}
      <IDontKnowModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        explanationText={idkExplanation}
        exampleText={idkExample}
        visualType={currentStepData?.visualType}
        language={language}
        speakFn={speakFn}
      />
    </div>
  );
}
