// src/config.js
const config = {
  // Fanar API endpoints
  API: {
    BASE_URL: 'https://api.fanar.qa/v1',
    CHAT_COMPLETIONS: '/chat/completions',
    AUDIO_SPEECH: '/audio/speech',
  },
  
  // Default model settings
  MODELS: {
    CHAT: 'Fanar',
    AUDIO: 'Fanar-Aura-TTS-1',
  },
  
  // Default voice settings
  VOICE: {
    DEFAULT: 'default',
    MALE: 'male',
    FEMALE: 'female',
  },
  
  // Default language settings
  LANGUAGE: {
    DEFAULT: 'ar',  // Arabic as default
    SUPPORTED: ['ar', 'en'],
  },
  
  // App settings
  APP: {
    NAME: 'NOUR',
    DEVELOPER: 'Hossam AboAssi',
    VERSION: '1.0.0',
  },
  
  // Local storage keys
  STORAGE_KEYS: {
    USER_PREFERENCES: 'nour_user_preferences',
    CONVERSATION_HISTORY: 'nour_conversation_history',
    ACCESS_TOKEN: 'nour_access_token',
  },
  
  // Default accessibility settings
  ACCESSIBILITY: {
    FONT_SIZE: 'medium',  // small, medium, large, x-large
    CONTRAST: 'normal',   // normal, high
    VOICE_COMMANDS: true,
    SCREEN_READER: false,
  },
};

export default config;