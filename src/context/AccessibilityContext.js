// src/context/AccessibilityContext.js
import React, { createContext, useState, useEffect } from 'react';
import config from '../config';

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState(config.ACCESSIBILITY);
  
  // Load settings from local storage on initial render
  useEffect(() => {
    const savedSettings = localStorage.getItem(config.STORAGE_KEYS.USER_PREFERENCES);
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        if (parsedSettings.accessibility) {
          setSettings(parsedSettings.accessibility);
        }
      } catch (error) {
        console.error('Failed to parse saved accessibility settings', error);
      }
    }
  }, []);
  
  // Save settings to local storage when they change
  useEffect(() => {
    const savedPreferences = localStorage.getItem(config.STORAGE_KEYS.USER_PREFERENCES) || '{}';
    let preferences;
    
    try {
      preferences = JSON.parse(savedPreferences);
    } catch (error) {
      preferences = {};
    }
    
    localStorage.setItem(
      config.STORAGE_KEYS.USER_PREFERENCES,
      JSON.stringify({
        ...preferences,
        accessibility: settings
      })
    );
    
    // Apply font size to body
    document.body.className = `font-size-${settings.FONT_SIZE} contrast-${settings.CONTRAST}`;
    
  }, [settings]);
  
  // Update a single setting
  const updateSetting = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  // Reset to defaults
  const resetToDefaults = () => {
    setSettings(config.ACCESSIBILITY);
  };
  
  return (
    <AccessibilityContext.Provider value={{ 
      settings, 
      updateSetting,
      resetToDefaults 
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
