import React, { createContext, useState } from 'react';
import { sendChatMessage, generateSpeech } from '../services/api';

export const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);
  const [isProcessing, setIsProcessing] = useState(false);

  const sendMessage = async (message) => {
    setIsProcessing(true);
    try {
      const response = await sendChatMessage(message, apiKey);
      return response;
    } finally {
      setIsProcessing(false);
    }
  };

  const convertToSpeech = async (text) => {
    const audioBlob = await generateSpeech(text, apiKey);
    return URL.createObjectURL(audioBlob);
  };

  return (
    <AIContext.Provider value={{ 
      sendMessage, 
      textToSpeech: convertToSpeech, 
      isProcessing 
    }}>
      {children}
    </AIContext.Provider>
  );
};