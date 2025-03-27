import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const features = [
  { id: 'quran', icon: '📖', title: 'Quran', desc: 'Read and listen to the Holy Quran' },
  { id: 'hadith', icon: '💬', title: 'Hadith', desc: 'Explore prophetic teachings' },
  { id: 'prayer', icon: '🕌', title: 'Prayer', desc: 'Prayer times & guidance' },
  { id: 'ai', icon: '🤖', title: 'Ask NOUR', desc: 'Get Islamic answers' },
  { id: 'learn', icon: '📚', title: 'Learn', desc: 'Islamic knowledge base' },
  { id: 'community', icon: '👥', title: 'Community', desc: 'Connect with others' },
];

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate cards on load
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, i) => {
      card.style.animation = `fadeInUp 0.5s ease-out ${i * 0.1}s forwards`;
    });
  }, []);

  return (
    <div className="home-page">
      <header>
        <h1>NOUR</h1>
        <p>Your Spiritual Companion</p>
      </header>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            className="feature-card"
            onClick={() => navigate(`/${feature.id}`)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}