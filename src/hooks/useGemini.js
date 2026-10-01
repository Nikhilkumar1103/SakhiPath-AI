import { useState, useCallback } from 'react';

export function useGemini() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const processQuery = useCallback(async (userText, language = 'ta-IN') => {
    setIsLoading(true);
    setError(null);

    // Rule-based fallback for e-Shram & general queries for offline / fast hackathon demo
    const lowerText = (userText || '').toLowerCase();
    const isEshram = lowerText.includes('shram') || 
                    lowerText.includes('ஷ்ரம்') || 
                    lowerText.includes('அட்டை') || 
                    lowerText.includes('card') || 
                    lowerText.includes('பதிவு') || 
                    lowerText.includes('பதிவு செய்ய') ||
                    lowerText.includes('e-shram');

    // Simulate API delay for natural AI feel
    await new Promise(res => setTimeout(res, 800));

    setIsLoading(false);

    if (isEshram || !userText) {
      return {
        serviceId: 'e-shram',
        serviceName: language.startsWith('ta') ? 'e-Shram அட்டை பதிவு' : 'e-Shram Card Registration',
        matchedIntent: true,
        summary: language.startsWith('ta') 
          ? "நீங்கள் e-Shram அட்டை பெற வழிகாட்டல் கேட்கிறீர்கள். நான் உங்களுக்கு 5 எளிய படிகளில் வழிகாட்டுகிறேன்."
          : "You are asking for e-Shram card registration guidance. I will guide you through 5 simple steps."
      };
    } else {
      // General service match
      return {
        serviceId: 'e-shram', // Default demo service
        serviceName: language.startsWith('ta') ? 'அரசு சேவை வழிகாட்டி (e-Shram)' : 'Government Guidance (e-Shram)',
        matchedIntent: true,
        summary: language.startsWith('ta')
          ? `மகிழ்ச்சி! "${userText}" தொடர்பான அரசு சேவைக்கு வழிகாட்ட தயார்.`
          : `Great! Ready to guide you for "${userText}".`
      };
    }
  }, []);

  return {
    processQuery,
    isLoading,
    error
  };
}
