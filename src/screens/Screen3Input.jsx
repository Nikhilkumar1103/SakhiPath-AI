import React, { useState, useEffect } from 'react';
import { Search, Send, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';
import { VoiceButton } from '../components/VoiceButton';
import { SpeakText } from '../components/SpeakText';

export function Screen3Input({ 
  language, 
  onQuerySubmit, 
  speakFn, 
  isPlaying,
  isListening,
  transcript,
  startListening,
  stopListening,
  setTranscript
}) {
  const t = translations[language] || translations['ta-IN'];
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    if (transcript) {
      setTextInput(transcript);
    }
  }, [transcript]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const query = textInput.trim() || transcript.trim() || t.suggestionEshram;
    onQuerySubmit(query);
  };

  const handleSuggestionClick = (suggestionText) => {
    setTextInput(suggestionText);
    onQuerySubmit(suggestionText);
  };

  return (
    <div className="screen-container input-screen">
      <div className="screen-header-group">
        <h2 className="screen-title">{t.inputTitle}</h2>
        <p className="screen-subtitle">{t.inputSubtitle}</p>
      </div>

      <SpeakText 
        text={language === 'ta-IN' ? "உங்களுக்கு என்ன உதவி வேண்டும்? மைக்கை அழுத்தி பேசுங்கள்." : "What service do you need? Tap the microphone and speak."}
        language={language}
        speakFn={speakFn}
        isPlaying={isPlaying}
        autoSpeak={true}
      />

      <div className="voice-input-section">
        <VoiceButton 
          isListening={isListening}
          onStart={startListening}
          onStop={stopListening}
          label={isListening ? t.micListening : t.micTapToSpeak}
          sublabel={t.micSpeakPrompt}
        />
      </div>

      {(textInput || transcript) && (
        <div className="live-transcript-box">
          <span className="transcript-label">🗣️ {language === 'ta-IN' ? 'நீங்கள் கூறியது:' : 'You said:'}</span>
          <p className="transcript-text">"{textInput || transcript}"</p>
        </div>
      )}

      <form className="text-input-form" onSubmit={handleSubmit}>
        <div className="input-field-wrapper">
          <Search size={20} className="search-icon" />
          <input 
            type="text"
            className="query-text-input"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder={t.typePlaceholder}
          />
          <button type="submit" className="send-btn" title={t.submitInputBtn}>
            <Send size={20} />
          </button>
        </div>
      </form>

      <div className="suggestions-section">
        <h4 className="suggestions-title">{t.quickSuggestionsTitle}</h4>
        <div className="suggestions-chips-grid">
          <button 
            type="button"
            className="suggestion-chip active-chip"
            onClick={() => handleSuggestionClick("e-Shram பதிவு செய்ய வேண்டும்")}
          >
            {t.suggestionEshram}
          </button>
          <button 
            type="button"
            className="suggestion-chip"
            onClick={() => handleSuggestionClick("PM Kisan பணம் வரவில்லை")}
          >
            {t.suggestionPmkisan}
          </button>
          <button 
            type="button"
            className="suggestion-chip"
            onClick={() => handleSuggestionClick("முதியோர் ஓய்வூதியம்")}
          >
            {t.suggestionPension}
          </button>
        </div>
      </div>
    </div>
  );
}
