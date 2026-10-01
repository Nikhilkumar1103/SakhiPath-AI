import React, { useState, useEffect } from 'react';
import './styles/index.css';

import { translations } from './data/translations';
import { eshramFlowData } from './data/eshramFlow';

import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { useGemini } from './hooks/useGemini';

import { Header } from './components/Header';
import { Screen1Welcome } from './screens/Screen1Welcome';
import { Screen2Language } from './screens/Screen2Language';
import { Screen3Input } from './screens/Screen3Input';
import { Screen4Confirm } from './screens/Screen4Confirm';
import { Screen5Guidance } from './screens/Screen5Guidance';
import { Screen8Readiness } from './screens/Screen8Readiness';
import { Screen9Handoff } from './screens/Screen9Handoff';

export default function App() {
  // App State Machine
  const [currentScreen, setCurrentScreen] = useState('WELCOME'); 
  // State options: 'WELCOME' | 'LANGUAGE' | 'INPUT' | 'CONFIRM' | 'GUIDANCE' | 'READINESS' | 'HANDOFF'
  
  const [language, setLanguage] = useState('ta-IN'); // Default Tamil
  const [userQuery, setUserQuery] = useState('');
  const [aiResult, setAiResult] = useState(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  // Audio Hooks
  const { speak, stop, isPlaying, isAudioEnabled, toggleAudio } = useSpeechSynthesis(language);
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    setTranscript 
  } = useSpeechRecognition(language);

  // Gemini Hook
  const { processQuery, isLoading: isGeminiLoading } = useGemini();

  // Navigation handlers
  const handleToggleLanguage = () => {
    const nextLang = language === 'ta-IN' ? 'en-IN' : 'ta-IN';
    setLanguage(nextLang);
  };

  const handleRestart = () => {
    stop();
    setActiveStepIndex(0);
    setUserAnswers({});
    setUserQuery('');
    setAiResult(null);
    setCurrentScreen('WELCOME');
  };

  const handleBack = () => {
    stop();
    switch (currentScreen) {
      case 'INPUT':
        setCurrentScreen('LANGUAGE');
        break;
      case 'CONFIRM':
        setCurrentScreen('INPUT');
        break;
      case 'GUIDANCE':
        if (activeStepIndex > 0) {
          setActiveStepIndex(prev => prev - 1);
        } else {
          setCurrentScreen('CONFIRM');
        }
        break;
      case 'READINESS':
        setCurrentScreen('GUIDANCE');
        setActiveStepIndex(eshramFlowData.length - 1);
        break;
      case 'HANDOFF':
        setCurrentScreen('READINESS');
        break;
      default:
        setCurrentScreen('WELCOME');
    }
  };

  // Screen 3 Query Submission
  const handleQuerySubmit = async (queryText) => {
    setUserQuery(queryText);
    stopListening();
    
    // Process query through Sakhi AI
    const result = await processQuery(queryText, language);
    setAiResult(result);
    setCurrentScreen('CONFIRM');
  };

  // Screen 5 Step Answers
  const handleAnswerYes = () => {
    setUserAnswers(prev => ({ ...prev, [activeStepIndex]: 'YES' }));
    
    if (activeStepIndex < eshramFlowData.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    } else {
      // Completed all 5 steps!
      setCurrentScreen('READINESS');
    }
  };

  const handleAnswerNo = () => {
    setUserAnswers(prev => ({ ...prev, [activeStepIndex]: 'NO' }));
  };

  const handleAnswerIDK = () => {
    setUserAnswers(prev => ({ ...prev, [activeStepIndex]: 'IDK' }));
  };

  return (
    <div className="app-viewport">
      <Header 
        currentScreen={currentScreen}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onBack={handleBack}
        onRestart={handleRestart}
        isAudioEnabled={isAudioEnabled}
        onToggleAudio={toggleAudio}
      />

      <main className="main-content-area">
        {currentScreen === 'WELCOME' && (
          <Screen1Welcome 
            language={language}
            onNext={() => setCurrentScreen('LANGUAGE')}
            speakFn={speak}
            isPlaying={isPlaying}
          />
        )}

        {currentScreen === 'LANGUAGE' && (
          <Screen2Language 
            language={language}
            onSelectLanguage={setLanguage}
            onNext={() => setCurrentScreen('INPUT')}
            speakFn={speak}
            isPlaying={isPlaying}
          />
        )}

        {currentScreen === 'INPUT' && (
          <Screen3Input 
            language={language}
            onQuerySubmit={handleQuerySubmit}
            speakFn={speak}
            isPlaying={isPlaying}
            isListening={isListening}
            transcript={transcript}
            startListening={startListening}
            stopListening={stopListening}
            setTranscript={setTranscript}
          />
        )}

        {currentScreen === 'CONFIRM' && (
          <Screen4Confirm 
            userQuery={userQuery}
            aiResult={aiResult}
            language={language}
            onConfirmYes={() => {
              setActiveStepIndex(0);
              setCurrentScreen('GUIDANCE');
            }}
            onConfirmNo={() => setCurrentScreen('INPUT')}
            speakFn={speak}
            isPlaying={isPlaying}
          />
        )}

        {currentScreen === 'GUIDANCE' && (
          <Screen5Guidance 
            currentStepData={eshramFlowData[activeStepIndex]}
            currentStepIndex={activeStepIndex}
            totalSteps={eshramFlowData.length}
            language={language}
            onAnswerYes={handleAnswerYes}
            onAnswerNo={handleAnswerNo}
            onAnswerIDK={handleAnswerIDK}
            onPrevStep={() => {
              if (activeStepIndex > 0) setActiveStepIndex(prev => prev - 1);
            }}
            speakFn={speak}
            isPlaying={isPlaying}
          />
        )}

        {currentScreen === 'READINESS' && (
          <Screen8Readiness 
            language={language}
            eshramFlowData={eshramFlowData}
            onProceedToHandoff={() => setCurrentScreen('HANDOFF')}
            speakFn={speak}
            isPlaying={isPlaying}
          />
        )}

        {currentScreen === 'HANDOFF' && (
          <Screen9Handoff 
            language={language}
            onStartOver={handleRestart}
            speakFn={speak}
            isPlaying={isPlaying}
          />
        )}
      </main>
    </div>
  );
}
