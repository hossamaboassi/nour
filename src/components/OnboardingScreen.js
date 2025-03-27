import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingScreen.css';

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Trigger fade animation after 3 seconds
    const timer = setTimeout(() => setFade(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`onboarding-container ${fade ? 'fade-out' : ''}`}>
      <div className="logo-section">
        <div className="logo-animation">
          <img src="/assets/images/logo.png" alt="NOUR" className="logo" />
          <div className="glow"></div>
        </div>
        <h1 className="title">NOUR</h1>
        <p className="slogan">Your Spiritual Companion</p>
      </div>
      
      {fade && (
        <button 
          className="get-started-btn"
          onClick={() => navigate('/signin')}
        >
          Begin Journey →
        </button>
      )}
    </div>
  );
}