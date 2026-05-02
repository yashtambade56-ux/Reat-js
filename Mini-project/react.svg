import React, { useState, useEffect } from 'react';
import './App.css';
import FlashCard from './components/FlashCard/FlashCard';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    const removeTimer = setTimeout(() => setShowLoading(false), 4800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="app-main-container">
      {showLoading && (
        <div className={`loading-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <LoadingScreen />
        </div>
      )}
      
      {!showLoading && (
        <div className="content-reveal">
          <FlashCard />
        </div>
      )}
    </div>
  );
}

export default App;