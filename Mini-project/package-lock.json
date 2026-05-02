import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => p < 100 ? p + 1 : 100);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="modern-loading-screen">
      <div className="forest-bg"></div>
      <div className="glass-overlay"></div>

      <div className="loading-content">
        <div className="flipping-card-loader">
          <div className="loader-card-inner">
            <div className="loader-card-front">
              <div className="loader-icon">{"</>"}</div>
              <h2>DEV TERMS</h2>
            </div>
            <div className="loader-card-back">
              <div className="loader-loading-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3>LOADING<span className="dots">...</span></h3>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <p className="loading-status-text">{"< Loading knowledge for developers... />"}</p>
          <div className="modern-progress-container">
            <div 
              className="modern-progress-bar" 
              style={{ width: `${progress}%` }}
            >
              <div className="progress-glow"></div>
            </div>
          </div>
          <span className="percentage-text">{progress}%</span>
        </div>
      </div>

      <footer className="loading-footer">
        <p>Tip: Click on a card to reveal the definition!</p>
      </footer>
    </div>
  );
};

export default LoadingScreen;
