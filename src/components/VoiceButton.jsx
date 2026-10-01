import React from 'react';
import { Mic, MicOff } from 'lucide-react';

export function VoiceButton({ isListening, onStart, onStop, label, sublabel }) {
  const handleClick = () => {
    if (isListening) {
      onStop();
    } else {
      onStart();
    }
  };

  return (
    <div className="voice-button-wrapper">
      <button 
        className={`voice-mic-btn ${isListening ? 'listening' : ''}`}
        onClick={handleClick}
        aria-label={label || 'Speak'}
      >
        <div className="pulse-ring ring-1"></div>
        <div className="pulse-ring ring-2"></div>
        <div className="mic-inner-circle">
          {isListening ? <MicOff size={38} className="mic-icon" /> : <Mic size={38} className="mic-icon" />}
        </div>
      </button>

      {label && (
        <div className="voice-btn-label-group">
          <span className={`voice-btn-label ${isListening ? 'listening-text' : ''}`}>
            {isListening ? '🎙️ ' + label : label}
          </span>
          {sublabel && <span className="voice-btn-sublabel">{sublabel}</span>}
        </div>
      )}
    </div>
  );
}
