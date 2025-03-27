// src/components/common/VoiceCommandButton.js
import React, { useState, useContext } from 'react';
import { AIContext } from '../../context/AIContext';

export default function VoiceCommandButton() {
  const [isListening, setIsListening] = useState(false);
  const { sendMessage, textToSpeech } = useContext(AIContext);

  const handleListen = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice commands not supported in this browser");
      return;
    }

    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ar-SA';

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      try {
        const response = await sendMessage(transcript);
        const audioUrl = await textToSpeech(response);
        new Audio(audioUrl).play();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    recognition.onerror = (event) => {
      console.error("Recognition error:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <button 
      onClick={handleListen}
      style={{ 
        background: isListening ? 'red' : '#4CAF50',
        color: 'white'
      }}
    >
      {isListening ? 'Listening...' : 'Voice Command'}
    </button>
  );
}