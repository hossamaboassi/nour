// src/components/ai-guide/AISpiritualGuide.js
import React, { useState, useContext } from 'react';
import { AIContext } from '../../context/AIContext';

export default function AISpiritualGuide() {
  const [question, setQuestion] = useState('');
  const { sendMessage, textToSpeech, isProcessing } = useContext(AIContext);
  
  // Add this temporary test function
  const testAPI = async () => {
    try {
      console.log("Testing API connection...");
      const testResponse = await sendMessage("What is the meaning of life in Islam?");
      console.log("API Test Success:", testResponse);
      alert("API Working! Response: " + testResponse);
    } catch (error) {
      console.error("API Test Failed:", error);
      alert("API Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Add this button at the top */}
      <button 
        onClick={testAPI}
        style={{
          padding: '10px',
          background: '#4CAF50',
          color: 'white',
          marginBottom: '20px'
        }}
      >
        Test API Connection
      </button>

      {/* Rest of your existing code */}
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question..."
      />
      <button onClick={() => sendMessage(question)}>
        Submit
      </button>
    </div>
  );
}