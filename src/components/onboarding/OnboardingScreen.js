import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/OnboardingScreen.css';

export default function OnboardingScreen() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      {/* Add your logo image (put it in public/assets/images/logo.png) */}
      <img 
        src="/assets/images/logo.png" 
        alt="NOUR Logo" 
        className="logo"
      />
      
      <h1 className="title">NOUR</h1>
      <p className="subtitle">Your Spiritual Companion</p>
      
      <button 
        className="get-started-btn"
        onClick={() => navigate('/signin')}
      >
        Begin Journey
      </button>
    </div>
  );
}