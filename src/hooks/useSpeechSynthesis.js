import { useState, useEffect, useCallback, useRef } from 'react';

export function useSpeechSynthesis(language = 'ta-IN') {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [supported, setSupported] = useState(false);
  const voicesRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSupported(true);

      const updateVoices = () => {
        voicesRef.current = window.speechSynthesis.getVoices();
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const speak = useCallback((text, langOverride) => {
    if (!supported || !isAudioEnabled || !text) return;

    try {
      window.speechSynthesis.cancel(); // Stop any active utterance

      const utterance = new SpeechSynthesisUtterance(text);
      const targetLang = langOverride || language;
      utterance.lang = targetLang;
      utterance.rate = targetLang.startsWith('ta') ? 0.85 : 0.9; // Slightly slower for clear regional voice
      utterance.pitch = 1.0;

      // Try to find matching voice
      const voices = voicesRef.current.length > 0 ? voicesRef.current : window.speechSynthesis.getVoices();
      const matchingVoice = voices.find(v => v.lang.startsWith(targetLang.split('-')[0])) ||
                            voices.find(v => v.lang.includes('IN'));
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = (err) => {
        console.warn("Speech synthesis error:", err);
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("Speech synthesis failed:", e);
      setIsPlaying(false);
    }
  }, [supported, isAudioEnabled, language]);

  const stop = useCallback(() => {
    if (supported) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, [supported]);

  const toggleAudio = useCallback(() => {
    setIsAudioEnabled(prev => {
      if (prev) stop();
      return !prev;
    });
  }, [stop]);

  return {
    speak,
    stop,
    isPlaying,
    isAudioEnabled,
    toggleAudio,
    supported
  };
}
