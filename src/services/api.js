// src/services/api.js
const API_BASE = 'https://api.fanar.qa/v1';

export const sendChatMessage = async (message, apiKey) => {
  try {
    const response = await fetch(`${API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        model: "Fanar",
        messages: [{
          role: "user",
          content: message
        }],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'API request failed');
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No response content";
    
  } catch (error) {
    console.error('Chat API Error:', error);
    throw new Error(`Failed to get response: ${error.message}`);
  }
};

export const generateSpeech = async (text, apiKey, voice = "default") => {
  try {
    const response = await fetch(`${API_BASE}/audio/speech`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "Fanar-Aura-TTS-1",
        input: text,
        voice: voice,
        speed: 1.0
      })
    });

    if (!response.ok) {
      throw new Error(`Audio API failed with status: ${response.status}`);
    }

    return await response.blob();
  } catch (error) {
    console.error('TTS Error:', error);
    throw new Error(`Voice generation failed: ${error.message}`);
  }
};