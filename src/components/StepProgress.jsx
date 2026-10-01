import React from 'react';
import { translations } from '../data/translations';

export function StepProgress({ currentStep, totalSteps = 5, language = 'ta-IN' }) {
  const t = translations[language] || translations['ta-IN'];

  return (
    <div className="step-progress-container">
      <div className="progress-text-row">
        <span className="step-label">
          {t.stepText} {currentStep} {t.ofText} {totalSteps}
        </span>
        <span className="progress-percentage">
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>
      </div>
      <div className="progress-track">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="step-dots-row">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <div 
            key={idx} 
            className={`step-dot ${idx + 1 === currentStep ? 'active' : idx + 1 < currentStep ? 'completed' : ''}`}
          >
            {idx + 1 < currentStep ? '✓' : idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
