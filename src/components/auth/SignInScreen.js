import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInScreen.css';

export default function SignInScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    navigate('/home');
  };

  return (
    <div className="signin-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Welcome to NOUR</h2>
          <p>Sign in to continue your spiritual journey</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <div className="form-footer">
          <p>New to NOUR? <span onClick={() => navigate('/signup')}>Create account</span></p>
          <p className="forgot-password">Forgot password?</p>
        </div>
      </div>
    </div>
  );
}